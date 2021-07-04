import { useState, useEffect } from 'react';
import { LoadImages , SearchImages } from "./components/Api";
import "./App.css";
import Image from "./components/Image";
function App() {
  const [query, setQuery] = useState()
  const [searchQ, setSearch] = useState()
  const data = LoadImages();
  

  const search =() => {
    setSearch(query)
  }
 const searchData = SearchImages(searchQ);
  console.log(searchData)

  return (
    
    <div className="App">
      <div className="heading">
      <h1>Image Finder App</h1>
    </div>
      <div className="search-button">
        <input type="text" placeholder="Enter Image Title " onChange={(event)=> setQuery(event.target.value)}/>
        <button onClick={search}>Search</button>
      </div>
      <div className="helper">
        <h6>*Search keywords like "Car" or "Pizza"</h6>
      </div>
      <div className="contain">
        {searchQ ? searchData.map((img, key) => (
          <Image src={img.urls.thumb} key={key}/>
        )) : data.map((img, key) => (
          <Image src={img.urls.thumb} key={key}/>
        ))}
      
      </div>
      <div className="footer">
        Designed by <a href="https://www.linkedin.com/in/shivam-jain-b5102b17a/">SHIVAM JAIN</a> | All Rigths reserved
      </div>
    </div>
  );
}

export default App;
