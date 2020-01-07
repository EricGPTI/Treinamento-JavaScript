/*
Operadores Aritmético
 */

 /*
# Aritméticos
# + Adição ou Concatenação (caso seja usado com strings)
#* - Subtração
#* * Multiplicação
# / Divisão
# ** Potenciação
# % Resto da Divisão

 */

 const num1 = 2;
 const num2 = 10;
 const str = '5';


 console.log(num1 + num2); // irá retornar 12
 console.log(num1 + str); // irá retornar 25, pois por ser tratar de uma string em um dos valores fará a concatenação.
 console.log(typeof (num1 + str)); // Retorna string conforme regra de concatenção.
 console.log(num1 - num2); // irá retornar -8 pois o primeiro número é menor que o segundo causando um número negativo.
 console.log(num1 - str); // irá retornar -3 mesmo sendo string o segundo número ele faz a subtração e retorna o resultado em forma de number.
 console.log(typeof (num1 - str)); // Retorna number conforme regra acima.
 console.log(num1 * num2); // irá retornar 20
 console.log(num1 * str); // irá retornar 10 mesmo sendo string o segundo número ele faz a multiplicação e retorna o resultado em forma de number.
 console.log(typeof (num1 * str)); // Retorna number conforme regra acima.
 console.log(num1 / num2); // irá retornar 0.2
 console.log(num1 / str); // irá retornar 0.4 mesmo sendo string o segundo número ele faz a divisão e retorna o resultado em forma de number.
 console.log(typeof (num1 / str)); // Retorna number conforme regra acima.
 console.log(num2 % num1); // irá retornar 0
 console.log(str % num1); // irá retornar 1 mesmo sendo string o segundo número ele faz a divisão e retorna o resultado em forma de number.
 console.log(typeof (num1 % str)); // Retorna number conforme regra acima.
 console.log(num2 ** num1); // irá retornar 100
 console.log(str ** num1); // irá retornar 25 mesmo sendo string o segundo número ele faz a divisão e retorna o resultado em forma de number.
 console.log(typeof (num1 ** str)); // Retorna number conforme regra acima.
 
/*
A ordem de precedência da matemática também é aplicada aqui.
*/

/*
Incremento e Decremento
++ e --

*/
let contador = 1;

/*
Pós-Incremento --> Numa operação primeiro faz a operação e depois o incremento.
*/
console.log('Pós-Incremento ', contador++);


/*
Pré-Incremento --> Numa operação, primeiro faz o incremento e depois faz a soma
*/
console.log('Pré-Incremento ', ++contador);

/*
Decremento é o oposto do Incremento.
*/

/*
Pós-Decremento --> Numa operação primeiro faz a operação e depois o decremento.
*/
console.log('Pós-Decremento ', contador--);


/*
Pré-Decremento --> Numa operação, primeiro faz o decremento e depois faz a soma
*/
console.log('Pre-Decremento ', --contador);

/*
Para fazer incremento ou decremento de mais de um valor usamos:
contador = contador + 2 ou contador += 2
O mesmo pode ser feito com qualquer operador... 
*/

/*
Conversão de Tipos
*/
//Método 1 - Transforma o float em int.
const num5 = 10;
const num6 = '5.2';

console.log(num5 + num6);

const num7 = parseInt(num6);
console.log(num5 + num7);

//Método 2 - Identificando automaticamente se é inteiro ou float.
const num10 = 10;
const num11 = '55.3';

console.log(num10 + num11);

const num12 = Number(num11);
console.log(num10 + num12);