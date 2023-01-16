//3-exercicio: faça um programa que gere um numero aleatorio entre 1 e 10
//e virifique se a pessoa ganhou ou não caso tenha ganhado mostre o premio se não mostre outra mensagen.

const randomNumber = Math.floor(Math.random() * (10 - 1) + 1)
const winningNumber = Math.floor(Math.random() * (10 - 1) + 1)

console.log(randomNumber, "randomNumber")
console.log(winningNumber, "winningNumber")

if(randomNumber === winningNumber){
    console.log("Voçê ganhou")
} else{
    console.log("voçê perdeu")
}