import { PrismaClient } from "@prisma/client";
import express from "express";
import * as bodyParser from "body-parser";

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());

app.post("/user", async (req, res) => {
  const { name, email, password } = req.body;
  const result = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
    select: {
      name,
    },
  });
  res.json(result);
});

app.get("/user", async (req, res) => {
  const { email } = req.body;
  const result = await prisma.user.findOne({
    where: { email },
  });
  res.json(result);
});

app.get("/exercise", async (req, res) => {
  const { email } = req.body;
  const result = await prisma.user.findOne({
    where: { email },
  });
  res.json(result);
});
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});

app.get("/", async (req, res) => {
  res.send("<h1>Ooops</h1>");
});
