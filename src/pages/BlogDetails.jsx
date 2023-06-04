import { useParams, Link } from "react-router-dom";
import { useFetch } from "../kooks/useFetch";

const BlogDetails = () => {
  const params = useParams();

  const { data, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <>Cargado detalle...!</>;


  return (
    <>
    
      <h2>
        {data.id} - {data.title}
      </h2>
      <p>{data.body}</p>
      <Link className="btn btn-dark" to="/blog">
        Volver
      </Link>
    </>
  );
};

export default BlogDetails;
