import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blog,
    ispending,
    err,
  } = useFetch(`http://localhost:8000/posts/${id}`);

  const handleDelete = () => {
    fetch('http://localhost:8000/posts/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="blog-details">
      {err && <div>{err}</div>}
      {ispending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
