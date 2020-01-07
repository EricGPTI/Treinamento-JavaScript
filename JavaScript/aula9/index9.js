/*
Tipos de Dados Primitivos.
string
number
undefined
null
boolean
symbol
*/

const nome = 'Eric'; // String
const nome1 = "Júnior"; // String
const nome2 = `Danielle`; // String
const num1 = 10; // Number
const num2 = 15.25; // Number
let nomeAluno; // Undefined -> Não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> Não aponta pra local nenhum na memória
const aprovado = false; // Booleano = true ou false (lógico)

/* 
Verificando o tipo da variável
*/

console.log(typeof aprovado, aprovado);

/*
Quando temos dados primitivos e fazermos: 
a=5;
b=a;

Estamos fazendo uma cópia de a em b, ou seja, a=5 e b=5
*/

/*
Tipos de Dados Passados por Referência
Em tipos passados por referência quando temos:

const a = [1, 2];
const b = a;

o resultado é que b = [1, 2]

No entanto, se fizermos a atribuição em b:
b.push(3)

teremos agora b = [1, 2, 3] e a = [1, 2, 3]
*/

const a = [1, 2];
const b = a;

console.log(a, b)

b.push(3)

console.log(a, b)