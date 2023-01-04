import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

//config the .env file
dotenv.config();

//create App from express
const port: string | number = process.env.PORT || 8000;
const app: Express = express();

//first route of APP
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Goodbye, world",
  });
});

app.get("/hello", (req: Request, res: Response) => {
  const { name } = req.query;
  res.status(200).json({
    message: `Hola ${name ? String(name) : "anonimo"}`,
  });
});

app.listen(port, () => console.log(`Server runing in port: ${port}`));
