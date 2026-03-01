function App() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_CONNECTION;
  const res = fetch(BACKEND_URL + "/").then((res) => console.log(res));

  console.log(res);
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
