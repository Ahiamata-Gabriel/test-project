import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [link, setlink] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, body, author, link };

    setLoading(true);

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog),
    }).then(() => {
      console.log('New Blog !!', newBlog);
      setLoading(false);
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>Add New Blog !!</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Your preffred social media:</label>
        <input
          type="text"
          required
          value={link}
          onChange={(e) => setlink(e.target.value)}
        />
        {!loading && <button>Add Blog</button>}
        {loading && <button disabled>Posting Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
