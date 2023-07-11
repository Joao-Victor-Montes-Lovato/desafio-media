/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

alert("Vamos calcular a media do aluno")

let student =  prompt ('Qual o seu nome ?')
let firstNote = prompt ('Primeira nota')
let secordNote = prompt ('Segunda nota')
let terceiraNote = prompt ('Terceira nota')

/* 
    fazer a media do aluno (average)

    (n1 + n2 + n3) / 3

*/

let average =  (Number(firstNote) + Number(secordNote) + Number (terceiraNote)) / 3

let result = average > 7


average = average.toFixed(1)

if (result){
alert("Parabéns, " + student + " Sua media foi: " + average )
} else if (average < 3){
    alert("Reprovado")
} else {
    alert (student + " estude para a prova de recuperação ! Sua media foi de: " + average)
}

alert(result)