//Los driverN del puerto describer los recursos que necesito de otros hexagonos en este caso 
//el hexagono de control plane no necesita nada de otro hexagono
//por lo cual el driveN se va a encargar de hacer el monitoreo

export interface ForMonitoring {
     log(event:string,message:string):void
}
