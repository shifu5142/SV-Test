// Copy this CORS block into your backend (replace app.use(cors()); with this)

const cors = require("cors");

// Allow your frontend origin(s). Add your Vercel/deployed frontend URL here.
const allowedOrigins = [
  "http://localhost:5173",           // Vite dev
  "http://localhost:3000",
  "https://your-frontend.vercel.app" // Replace with your real frontend URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g. Postman, same-origin)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(null, true); // set to (new Error("Not allowed by CORS")) to block unknown origins
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Make sure this comes before your routes (e.g. before app.get("/", ...))
