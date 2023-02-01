// import PropTypes from 'prop-types'
import React from "react";

const Newsitem =(props)=> {

 
    let { title, description, imgurl, newsurl,author,date } = props;
    return (
      <div className="card" style={{width:"100%", height:"98%"}}>
        <img src={imgurl!==null?imgurl:"https://wolfstreet.com/wp-content/uploads/2022/06/Canada-CPI-BOC-forecasts.png"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p><p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p> 
          <a href={newsurl} className="btn btn-sm btn-dark">
            <strong>For more..</strong>
          </a>
        </div>
      </div>
    );
    
}

export default Newsitem
