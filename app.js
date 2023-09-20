// axios.get("http://localhost:3000/posts").then((res) => {
//   console.log(res.data);
// });

axios
  .post("http://localhost:3000/posts", {
    title: "json-server2",
    author: "typicode2",
  })
  .then((res) => {
    console.log(res.data);
  });
