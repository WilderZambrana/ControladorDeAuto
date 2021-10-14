function posFinal(cadena){
    const partesCadena = cadena.split("/");
    //console.log(cadena.substr(2,1));
    if(partesCadena.length>1){
        const superficie = partesCadena[0].split(",");
        const inicio = partesCadena[1].split(",");
        if(superficie.length>1)
            return Number(superficie[0])+","+Number(superficie[1])+"/"+Number(inicio[0])+","+Number(inicio[1])
        return Number(superficie[0])+","+Number(superficie[1])+"/"+Number(inicio[0])+","+Number(inicio[1])
    }
    else{
        const superficie = cadena.split(",")
        if(superficie.length>1)
            return Number(superficie[0])+","+Number(superficie[1])
        return Number(cadena)+','+Number(cadena);
    }    
}



export default posFinal;