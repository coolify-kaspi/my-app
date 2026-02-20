const express = require("express");
const app = express();

app.use(express.json()); // 🔥 маңызды

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ✅ Kaspi Extract route
app.post("/kaspi/extract", (req, res) => {
  const { receipt_url } = req.body;

  if (!receipt_url) {
    return res.status(400).json({ error: "Missing receipt_url" });
  }

  console.log("Receipt URL:", receipt_url);

  res.json({
    success: true,
    received: receipt_url
  });
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
