import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "./../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
    /**
     * Endpoint return message "Hello [name]" en JSON
     * @param {string|undefined} name Name of user to be greeted
     * @returns {BasicResponse} Promise 
     */
    @Get("/")
    public async getMessage(@Query() name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] GetRequest');

        return {
            message: `Hello, ${name || 'World'}!`
        }
    }
    
}