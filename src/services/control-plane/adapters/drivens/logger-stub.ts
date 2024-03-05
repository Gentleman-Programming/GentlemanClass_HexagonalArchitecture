import { ForLogging } from "../../ports/drivens/for-logging";

export class LoggerStub implements ForLogging {
  log(event: string, message: string): void {
    console.log(event, message);
  }
}
