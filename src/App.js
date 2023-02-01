// import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
   Link,
  Routes
} from "react-router-dom";


export default function App() {

  const [progress, setprogress] = useState(0);


 const setProgress=(progress)=>{
    setprogress(progress)
  };
  
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
      />
      <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}  key="general" category="general"/>}/>  
            <Route exact path="/general"  element={<News setProgress={setProgress}  key="general" category="general"/>}/> 
            <Route exact path="/business"  element={<News setProgress={setProgress}  key="business" category="business"/>}/>  
            <Route exact path="/science" element={<News setProgress={setProgress}  key="science" category="science"/>}/>
            <Route exact path="/health" element={<News setProgress={setProgress}  key="health"  category="health"/>}/>  
            <Route exact path="/sports"  element={<News setProgress={setProgress}  key="sports"  category="sports"/>}/>
            <Route exact path="/technology"  element={<News setProgress={setProgress}  key="technology" category="technology"/>}/> 
            <Route exact path="/entertainment"  element ={<News setProgress={setProgress}  key="entertainment" category="entertainment"/>}/>                       
      </Routes>
      </Router>
      </>
   );

}


// import React from 'react'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }
