function posFinal(cadena){
    const superficie = cadena.split(",");
    if(superficie.length>1){
        return superficie[0]+","+superficie[1]
    }
    return cadena+','+cadena;
}

export default posFinal;