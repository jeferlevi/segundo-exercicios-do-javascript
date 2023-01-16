//5-exercicio: Crie 5 objetos nesse formato{nome:"", idade:"", sexo:"", profissão:"", nacionalidade:""}
// ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, a pessoa deve ser mais de idade e 
// Brasileira para ser aprovada.

const personOne = {nome:"Rododolfo", idade:30, sexo:"Masculino", profissão:"Programador", nacionalidade:"Brasileiro"}

if(personOne.idade >= 18 && personOne.nacionalidade === "Brasileiro"){
    console.log("Você passou no processo")
}else{
    console.log("Você não passou no processo")
}
