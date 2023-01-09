import { LogSuccess } from "./../utils/logger";
import { IGoodbyeController } from "./interfaces";
import { BasicResponseGoodbye } from "./types";

export class GoodbyeController implements IGoodbyeController {
  async getMessage(name?: string | undefined): Promise<BasicResponseGoodbye> {
    LogSuccess("[/api/hello] GetRequest");

    return {
      message: `Goodbye ${name || "anonimo"}!`,
      date: new Date().toLocaleDateString(),
    };
  }
}
