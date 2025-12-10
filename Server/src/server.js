import express from "express";
import OpenAI from "openai";
import "dotenv/config";
const app = express();
const port = 8080;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", async (req, res) => {
  try {
    const response = await openai.responses.create({
      model: "gpt-5-nano",
      input: "create a script that create this structure automaticaly on linux",
      store: true,
    });

    console.log(response);

    res.send(response.output_text ?? "No output");
  } catch (error) {
    console.error(error);
    res.status(500).send("OpenAI connection error");
  }
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
