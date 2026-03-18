function podevotar(idade) {
    let frase;
        if(idade < 16) {   
            frase = "não pode votar";
        }else if (idade >= 18 && idade <= 65) {
            frase = "pode votar,e é obrigatorio";
            } else { 
               frase = "pode votar, mas é opcional";
               }
               return frase;
            }
            let idade = 23;
            console.log("idade:", idade, "-", podevotar(idade));   




            /*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/


function prova(nota) {
    let frase;
    if (nota <= 5 ) {
     frase = "reprovado";
     } else if (nota >=5 && nota <= 6.5){ 
          