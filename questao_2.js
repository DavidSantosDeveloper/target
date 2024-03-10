function verifica_Se_Um_Numero_Faz_Parte_Da_Sequencia_Fibonacci(numero){
    if(numero<0){
        return false
    }
    else if(numero==0 || numero==1){
        return true
    }
    else{
        let lista_sequencia_fibonacci = [0, 1];

        for (let indice = 2; indice <= numero; indice++) {
            let proximoNumero = lista_sequencia_fibonacci[indice - 1] + lista_sequencia_fibonacci[indice - 2];
            if(proximoNumero==numero){
                return true;
            }
            lista_sequencia_fibonacci.push(proximoNumero);
        }
        return false;
    }
}

function main(){
    let numero=10
    if(verifica_Se_Um_Numero_Faz_Parte_Da_Sequencia_Fibonacci(numero)){
        console.log(`o numero ${numero} faz parte da sequencia de fibonacci!!!!!`)
    }
    else{
        console.log(`o numero ${numero} NÃO faz parte da sequencia de fibonacci!!!!!`)
    }
}
main()