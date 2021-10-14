function posFinal(cadena) {
    const partesCadena = cadena.split("/");
    //console.log(cadena.substr(2,1));
    if (partesCadena.length > 2) {
        const superficie = partesCadena[0].split(",");
        const inicio = partesCadena[1].split(",");
        const direccion = inicio[1].split(" ");
        const comando = partesCadena[2];
        if (direccion.length > 1) {
            if (comando == "I") {
                if(direccion[1]=="N"){
                    direccion[1]="O"
                } else{
                    if(direccion[1]=="O"){
                        direccion[1]="S"
                    }else{
                        if(direccion[1]=="S"){
                            direccion[1]="E"
                        }else{
                            if(direccion[1]=="E")
                                direccion[1]="N"
                        }
                    }
                }
            }
            else{
                if(comando=="S"){
                    let num = Number(inicio[0])+2;
                    inicio[0]=num.toString();
                }
            }
            if (superficie.length > 1)
                return Number(superficie[0]) + "," + Number(superficie[1]) + "/" + Number(inicio[0]) + "," + Number(direccion[0]) + " " + direccion[1]
            return Number(superficie) + "," + Number(superficie) + "/" + Number(inicio[0]) + "," + Number(direccion[0]) + " " + direccion[1]
        }
        else {
            if (superficie.length > 1)
                return Number(superficie[0]) + "," + Number(superficie[1]) + "/" + Number(inicio[0]) + "," + Number(inicio[1])
            return Number(superficie) + "," + Number(superficie) + "/" + Number(inicio[0]) + "," + Number(inicio[1])
        }
    }
    else {
        if (partesCadena.length > 1) {
            const superficie = partesCadena[0].split(",");
            const inicio = partesCadena[1].split(",");
            const direccion = inicio[1].split(" ");
            if (direccion.length > 1) {
                if (superficie.length > 1)
                    return Number(superficie[0]) + "," + Number(superficie[1]) + "/" + Number(inicio[0]) + "," + Number(direccion[0]) + " " + direccion[1]
                return Number(superficie) + "," + Number(superficie) + "/" + Number(inicio[0]) + "," + Number(direccion[0]) + " " + direccion[1]
            }
            else {
                if (superficie.length > 1)
                    return Number(superficie[0]) + "," + Number(superficie[1]) + "/" + Number(inicio[0]) + "," + Number(inicio[1])
                return Number(superficie) + "," + Number(superficie) + "/" + Number(inicio[0]) + "," + Number(inicio[1])
            }
        }
        else {
            const superficie = cadena.split(",")
            if (superficie.length > 1)
                return Number(superficie[0]) + "," + Number(superficie[1])
            return Number(cadena) + ',' + Number(cadena);
        }
    }
}



export default posFinal;