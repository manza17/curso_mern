import express, { Express, Request, Response } from "express";
import router from "../routes";


//security
import cors from "cors";
import helmet from "helmet";

//TODO: HTTPS

//create App from express
const server: Express = express();

server.use("/api", router);

//TODO mongoose connection

//security config
server.use(helmet());
server.use(cors());

//content type config
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json())

//Redirection  config
server.get('/',(req:Request,res:Response)=>{
    res.redirect('/api')
})

export default server;