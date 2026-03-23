function addPost() {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  const post = { title, image, content };

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(post);

  localStorage.setItem("posts", JSON.stringify(posts));

  alert("Post added!");
}



