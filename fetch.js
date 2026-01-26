fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// 82
const ul = document.getElementById("postList");
data.forEach((post) => {
const li = document.createElement("li");
li.textContent = post.title;
ul.appendChild(li);
});
});
