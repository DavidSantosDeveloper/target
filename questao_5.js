function inverterTexto(texto_original=''){
    let texto_invertido=''
    for(let indice_atual=texto_original.length-1;indice_atual>=0;indice_atual--){
        texto_invertido+=texto_original[indice_atual]
    }
    return texto_invertido
}

function main(){
    let texto='Texto de teste  2024'
    console.log( `texto original: ${texto}` )
    console.log(`texto invertido:  ${inverterTexto(texto)}`)
}
main()