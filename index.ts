import dotenv from "dotenv";
import server from "./src/server";
import { LogError, LogSuccess } from "./src/utils/logger";

//config the .env file
dotenv.config();

const port: string | number = process.env.PORT || 8000;

server.listen(port, () =>{
  LogSuccess(`[Server ON]: Running in localhost:${port}/api`)
});

//control server error
server.on('error', (error)=>{
  LogError(`[Server Error]: ${error}`);
})