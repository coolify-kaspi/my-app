const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// 🔥 Kaspi Extract route
app.post("/kaspi/extract", (req, res) => {
  console.log("Incoming data:", req.body);

  const { receipt_url } = req.body;

  if (!receipt_url) {
    return res.status(400).json({
      error: "receipt_url is required"
    });
  }

  // әзірге тек тест жауап
  return res.json({
    success: true,
    received: receipt_url
  });
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
