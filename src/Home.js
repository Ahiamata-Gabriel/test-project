import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
  const {
    data: blogs,
    ispending,
    err,
  } = useFetch('http://localhost:8000/posts');

  return (
    <div className="home">
      {err && <div>{err}</div>}
      {ispending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
