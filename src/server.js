const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://SCORLEOs773:RjZCbPc4f6WoAJuQ@cluster0.ghdrk.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const dataSchema = new mongoose.Schema({
  timeRange: String,
  data: Object,
});

const Data = mongoose.model("Data", dataSchema);

app.get("/api/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
