import { Response, Request, Router } from "express";
import { GoodbyeController } from "./../controllers/goodbye.controller";

//router from express
let goodbyeRouter = Router();

goodbyeRouter.route('/')
    .get(async (req:Request,res:Response)=>{
        //query params
        const name:any = req?.query?.name;
        //obtengo una instancia del controllers
        const controller: GoodbyeController = new GoodbyeController();
        //obtengo la respuesta
        const response = await controller.getMessage(name);
        //envio la respuesta al cliente
        return res.send(response)
    })

export default goodbyeRouter;