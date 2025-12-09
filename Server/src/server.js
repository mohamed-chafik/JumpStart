const express = require('express');
const app = express();
const port = 8080;
import OpenAI from "openai";
app.get('/', (req, res) => {

const openai = new OpenAI({
  apiKey: "",
});

const response = openai.responses.create({
  model: "gpt-5-nano",
  input: "write a haiku about ai",
  store: true,
});

response.then((result) => console.log(result.output_text));
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
