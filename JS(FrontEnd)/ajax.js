// fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (response) => response.json()
// ).then(
//   (data) => console.log(data)
// ).catch(
//   (error) => console.error("Error:", error)
// );


// Frontend

async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/api/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();
  document.getElementById("message").innerText = result.message;
}
