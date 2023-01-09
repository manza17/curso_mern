import express,{ Router, Response, Request } from "express";
import helloRouter from "./hello.router";
import goodbyeRouter from "./goodbye.router";
import { LogInfo } from "./../utils/logger";

//Instancia express
const server = express();
//Instancia de router
const rootRouter: Router = Router();

//first route of APP
rootRouter.get("/", (req: Request, res: Response) => {
LogInfo('[/api/]');
  res.send({
    message: "Welcome curso MERN!!",
  });
});

//Redirect 
server.use('/', rootRouter);
server.use('/hello', helloRouter);
server.use('/goodbye', goodbyeRouter);

export default server;