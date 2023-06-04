import React, { useEffect } from "react";
import { useFetch } from "../kooks/useFetch";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <h1>Loading....!</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <ul className="list-group">
        {loading && <li>Loading....!</li>}
        {data?.map((item) => (
          <li key={item.id} className="list-group-item">
            <Link to={`/blog/${item.id}`}>
              {item.id} - {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
