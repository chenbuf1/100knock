import { useEffect, useState } from "react";

function PostsPagination() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const limit = 10; // 每页显示 10 条

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [page]);

  return (
    <div>
      <h2>Page {page}</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        前へ
      </button>

      <button onClick={() => setPage(page + 1)}>
        次へ
      </button>
    </div>
  );
}

export default PostsPagination;
