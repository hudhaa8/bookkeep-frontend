import React from "react";
import "./Book.css";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

const Book = (props) => {
 const history = useNavigate();
  const { _id, name, author, description, price, image } =
    props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`https://book-keep-app.herokuapp.com/books/${_id}`)
      .then((res) => res.data)
      .then(()=>history("/"))
      //window.location.replace("/books")
     .then(() => history("/books"));
       
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h2>{name}</h2>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Link to={`/books/${_id}`}>
        {" "}
        <button sx={{ mt: "auto" }}>Update</button>{" "}
      </Link>
      <button onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </button>
    </div>
  );
};

export default Book;
