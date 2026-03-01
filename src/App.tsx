import { useEffect, useState } from "react";

// Use full backend URL so the request hits your Express server, not Vite (which would return HTML)
const BACKEND_URL = import.meta.env.VITE_BACKEND_CONNECTION ?? "http://localhost:3000";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${BACKEND_URL}/`)
      .then((res) => res.text()) // Backend sends plain text "Hello World", not JSON
      .then(setMessage)
      .catch((err) => setMessage(`Error: ${err.message}`));
  }, []);

  return (
    <>
      <h1>hello</h1>
      {message && <p>{message}</p>}
    </>
  );
}

export default App;
