// Questão 1 
//let idadeMinima = 17;

// if(idadeMinima >= 18){
   // console.log("Maior de idade");
// }else{
   // console.log("Menor de idade");
// }

// Questão 2 

// let numero = 10;

// if(numero > 0){
   // console.log("Positivo");
// } else if(numero == 0){
   // console.log("Zero");
// } else {
   // console.log("Negativo")
// }

// Questão 3 

// let numeroA = 7;
// let numeroB = 5;

// if(numeroA > numeroB){
   // console.log(`${numeroA} é maior que ${numeroB}`);
// } else if(numeroB > numeroA){
   // console.log(`${numeroB} é maior que ${numeroA}`);
// } else //{
    // console.log("Os números são iguais");
// }

// Questão 4 

// let numero = 44;

// if((numero % 2) == 0){
    // console.log(`${numero} é par!`);
// }else{
   // console.log(`${numero} é impar!`);
// }

// Questão 5 

// let notaA = 7;
// let notaB = 7;
// let notaC = 5;
// let media = ((notaA + notaB + notaC) / 3).toFixed(1);
// let situacao = "";

// if (media >= 7) {
//     situacao = "Aprovado";
// }else if (media > 5 && media < 7) {
//     situacao = "Recuperação";
// }else{
//     situacao = "Reprovado";
// }

// console.log(`${situacao}, média: ${media}`);

// Questão 6 

// let valor = 620;
// let desconto = 0.35;
// if(valor > 100){
    
//     console.log(`Total a pagar: R$ ${(valor - (valor * desconto)).toFixed(2)}`);
    
// }else{
//     console.log(`Total a pagar: R$ ${valor.toFixed(2)}`);
    
// }

// Questão 7

// let ano = 2023;

// if (ano % 400 == 0) {
//     console.log(`${ano} é bisexto`);
// } else if (ano % 4 == 0 && ano % 100 != 0) {
//     console.log(`${ano} é bisexto`);
// } else {
//     console.log(`${ano} não é bisexto`);
// }


// Questão 8 

// let usuario = "francisco"

// let senha = 1234

// if (usuario == "francisco" && senha == 1234 ){
//  console.log("acesso Liberado");
// } else{
//  console.log("acesso negado");

//  }

// Questão 9

// let compra = 150;
// let frete = 20;

// if (compra >= 200) {
//     console.log(`Frete Grátis R$${compra.toFixed(2)}`);
// } else {
//     let total = compra + frete;
//     console.log(`Total com Frete: R$${total.toFixed(2)}`);
// }

// Questão 10 

let numero = 50
if(numero > 10 && numero < 40 )
    console.log("Esta No Intervalo");
else{
    console.log("Fora Do Intervalo");
}