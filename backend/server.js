const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/menu", (req, res) => {
  res.json([
    { name: "Tamu Mixed Grill", price: 1200 },
    { name: "Coconut Fish Curry", price: 980 },
    { name: "Swahili Chicken Wrap", price: 750 },
    { name: "Pilau Beef Bowl", price: 820 },
  ]);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
