function App() {
  const res = fetch(import.meta.env.VITE_BACKEND_CONNECTION + "/")
    .then((res) => res.json())
    .then((data) => console.log(data));
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
