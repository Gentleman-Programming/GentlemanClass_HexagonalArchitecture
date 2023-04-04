import { ForMonitoring } from "../../ports/drivens";

export class LoggerStubAdapter implements ForMonitoring {
  log(event: string, message: string) {
    console.log(event, message);
  }
}
