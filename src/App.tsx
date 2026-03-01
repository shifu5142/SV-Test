function App() {
  // Strip trailing slashes so we never get "//"
  const BACKEND_URL = (
    import.meta.env.VITE_BACKEND_CONNECTION || "http://localhost:3000"
  ).replace(/\/+$/, "");

  fetch(BACKEND_URL + "/")
    .then((res) => {
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
