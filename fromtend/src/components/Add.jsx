import React, { useState } from "react";
import "../styles/add.css";

const Add = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");

  const handleAddArticle = async () => {
    const articleBody = { title, image, author, category, body };
    console.log(articleBody);
    try {
      const response = await fetch("https://localhost:5000/Article/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleBody),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        window.alert("Article added successfully!");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Error adding article. Please try again later.");
    }
  };
  return (
    <div className="add" class="add">
      <h1>ADD Articles</h1>
      <form>
        <table>
          <tr>
            <td>Title:</td>
            <td>
              <input
                type="text"
                className="form"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Image:</td>
            <td>
              <input
                type="file"
                className="form"
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Author:</td>
            <td>
              <input
                type="text"
                className="form"
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>
              <input
                type="text"
                className="form"
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Body:</td>
            <td>
              <input
                type="text"
                className="form"
                onChange={(e) => setBody(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <button className="add-button" onClick={handleAddArticle}>
                Add
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Add;
