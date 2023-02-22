import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            {blog.body.split(' ').slice(0, 100).join(' ')}...{' '}
            <Link to={`/blogs/${blog.id}`}>Countinue Reading</Link>
          </p>
          <p>Written by {blog.author}</p>
          <a href="https://github.com/Ahiamata-Gabriel">LinkedIn Account</a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
