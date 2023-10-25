import {Routes,Route } from "react-router-dom";
import Article from "./component/Article"
import Dashboard from "./component/Dashboard";
import axios from "axios";
import "./App.css"
import { useState, useEffect } from "react";
function App() {
  
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await axios.get("http://localhost:8080/Article/getAll");

        setArticle(res1.data.data);

        console.log(article, "article");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 
  

  return (
    <div className="App">
    
        <Routes>
          
              <Route
          
            path={`/`}
            element={ article && article.map((info) => (
                <Article
                  key={info._id}
                  title={info.Title}
                  category={info.Category}
                   body={info.Body}
                  image={info.ArticleImage}
                  author={info.Author}
                />))}
                
              />
           
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
     
    </div>
  );
}

export default App;
