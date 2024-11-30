import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const userStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={userStyle}>
      <h4>Post of Id: {id} </h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}>
        <button>Post Details</button>
      </Link>
    </div>
  );
};

export default Post;
