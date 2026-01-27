import { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: "test body",
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <button type="submit">送信</button>
      </form>

      {result && (
        <div>
          <p>送信結果:</p>
          <p>title: {result.title}</p>
          <p>id: {result.id}</p>
        </div>
      )}
    </div>
  );
}

export default PostForm;
