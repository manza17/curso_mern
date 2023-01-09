import { Response, Request, Router } from "express";
import { HelloController } from "./../controllers/hello.controller";

//router from express
let helloRouter = Router();

helloRouter.route('/')
    .get(async (req:Request,res:Response)=>{
        //query params
        const name:any = req?.query?.name;
        //obtengo una instancia del controllers
        const controller: HelloController = new HelloController();
        //obtengo la respuesta
        const response = await controller.getMessage(name);
        //envio la respuesta al cliente
        return res.send(response)
    })

export default helloRouter;