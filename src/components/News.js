import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import  Spinner  from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const update = async ()=>{
    props.setProgress(10);  
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=92f185ba95e3446883ffce1d306d60b0&pageSize=6`;
    setLoading(true);setLoading1(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults( parsedData.totalResults);
    setLoading(false);setLoading1(false);
    props.setProgress(100);
  }

    useEffect(() => {

      update();

    
    }, [])
 


  // handlePreviousClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?category=${
  //     this.props.category
  //   }&country=in&apiKey=92f185ba95e3446883ffce1d306d60b0&page=${
  //     this.state.page - 1
  //   }&pageSize=6`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();

  //   this.setState({
  //     articles: parsedData.articles,
  //     loading: false,
  //     page: this.state.page - 1,
  //   });
  // };

  // handleNextClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?category=${
  //     this.props.category
  //   }&country=in&apiKey=92f185ba95e3446883ffce1d306d60b0&page=${
  //     this.state.page + 1
  //   }&pageSize=6`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: parsedData.articles,
  //     loading: false,
  //     page: this.state.page + 1,
  //   });
  // };


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=92f185ba95e3446883ffce1d306d60b0&page=${page+1}&pageSize=6`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setPage(page+1);
    setTotalResults(parsedData.totalResults);
  
  };


 
    return (
      <>
        <div className="container my-3">
          <h1 style={{marginTop:"72px"}} className="text-center">News headlines - Top news from {props.category.charAt(0).toUpperCase()+ props.category.slice(1)} </h1>
          
          <InfiniteScroll
          
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults} 
          loader={<span className="text-center" >
              <Spinner  />
            </span>}
        >
        <div className="container">
          <div className="row my-3">
            {!loading1 && articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title : "No title"}
                      author={!element.author ? "Unknown" : element.author}
                      date={element.publishedAt}
                      description={
                        element.description
                          ? element.description
                          : "No description"
                      }
                      imgurl={element.urlToImage}
                      newsurl={element.url}
                      key={element.id}
                
                    />
                  </div>
                
                  
                );
              })}
          </div>
          </div>
          </InfiniteScroll>

          {/* <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
            >
              &larr; previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 6)
              }
            >
              next &rarr;
            </button>
          </div> */}
        </div>
      </>
    );
  
}


News.defaultpropTypes = {
  category: "general",
};
News.propTypes = {
  category: PropTypes.string,
};

export default News;
