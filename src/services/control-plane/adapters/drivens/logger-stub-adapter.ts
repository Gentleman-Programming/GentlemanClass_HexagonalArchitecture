import { ForMonitoringAuthDetails } from '../../ports/drivens/for-monitoring'

export class LoggerStubAdapter implements ForMonitoringAuthDetails {
  log(event: string, message: string) {
    console.log(event, message)
  }
}
