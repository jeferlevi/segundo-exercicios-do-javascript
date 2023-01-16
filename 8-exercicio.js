//8-exercicio: Faça um programa onde leia um numero e diga se ele é par ou impar
// se é um numero devisivel por 5


const number = 27

if(number % 2 === 0){
    if(number % 5 === 0) console.log("O número é par e divisivel por 5")
    else console.log("O número é par e não é divisivel pr 5")
}else{
    for (let i = 2; i < number; i++)
    if (number % 1 ===0){
        console.log("Ele é impar mais não é primo")
        break
    } else{ if(i === number - 1) console.log("Ele é um numero primo") 
}
}