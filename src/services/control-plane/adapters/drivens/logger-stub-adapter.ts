import { ForMonitoring } from "../../ports/drivens";
//es un stub que es basicamente un MOCK donde simulamos que solicitamos algo a otro hexagono
//esto se hace para probarlo 
export class LoggerStubAdapter implements ForMonitoring {
  log(event: string, message: string) {
    console.log(event, message);
  }
}
