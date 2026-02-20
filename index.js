app.use(express.json());

app.post("/kaspi/extract", (req, res) => {
  const { receipt_url } = req.body;

  if (!receipt_url) {
    return res.status(400).json({ error: "Missing receipt_url" });
  }

  console.log("Receipt URL:", receipt_url);

  res.json({ success: true });
});
