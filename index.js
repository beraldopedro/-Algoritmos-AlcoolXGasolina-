var gasolina
var alcool

do{
  gasolina = parseFloat(prompt('Preço do litro de gasolina? '), 10)
  alcool = parseFloat(prompt('Preço do litro de álcool? '), 10)

if(gasolina * .7 == alcool){
  alert('Tanto faz abastecer gasolina ou álcool.\n')
}else{
var teste = gasolina * .7 > alcool ?  alert('Melhor abastecer com álcool.\n') : alert('Melhor abastecer com gasolina.\n')
}
var resposta = prompt('Deseja realizar novo cálculo? \n Responda S para Sim e N para Não')
}while(resposta == 'S')

if(resposta == 'N')
  alert('Consulta finalizada com sucesso!')
