import { useEffect, useState } from "react";


function Posts() {
const [posts, setPosts] = useState([]);


useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((data) => {
setPosts(data);
});
}, []);


return (
<ul>
{posts.map((post) => (
<li key={post.id}>{post.title}</li>
))}
</ul>
);
}


export default Posts;
