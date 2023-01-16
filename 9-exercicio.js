//9-exercicio: Faça um programa onde ele leia 4 numeros. 
// encada caso ele deve retornar a mensagen condizente. todo os numeros são impares 
// todos os números são pares em caso negativo 
// a números pares e impares

const numberOne = 32
const numberTwo = 44
const numberThree = 23
const numberFour = 28

if(numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree %2 === 0 && numberFour % 2 ===0){
    console.log("Todos são pares")
}else if(numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree %2 !== 0 && numberFour % 2 !==0){
    console.log("Todos são impares")
}else {
    console.log("Tudo misturado impares e pares")
}