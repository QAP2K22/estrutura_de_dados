/*
    Utilize uma estrutura de controle para descobrir se o valor de sua idade é par ou ímpar.
*/

const idade = 18

if (idade % 2 == 0) {
    console.log(`${idade} é par.`)
} else {
    console.log(`${idade} é impar.`)

}


/*
    Faça um laço para imprimir todos os anos, do ano atual até o ano de seu nascimento.
*/

for (var i = 2024; i >= 2004; i -= 1) {
    console.log(i)
}


/*
    Declare as seguintes propriedades (variáveis) em uma classe aluno (nome, idade e peso), instancie um objeto com seu nome. 
    Depois acesse e altere os valores correspondentes aos seus tipos: nome(string), idade(inteiro), peso(double). Apresente na console o conteúdo de cada propriedade do objeto.
*/

function Aluno(nome, idade, peso) {
    this.nome = nome
    this.idade = idade
    this.peso = peso

    /* this.printLog = function() {
        console.log("Nome:", meuAluno.nome);
        console.log("Idade:", meuAluno.idade);
        console.log("Peso:", meuAluno.peso);
    } */
}


const meuAluno = new Aluno("João Maria da Silva Rocha Campos Mato de Medeiros Souza Ramos", 24, 48.5)

meuAluno.nome = "Carlos Alberto Lima de Ramos Barbosa"
meuAluno.idade = 17
meuAluno.peso = 74.8

console.log("Nome:", meuAluno.nome);
console.log("Idade:", meuAluno.idade);
console.log("Peso:", meuAluno.peso);