//Entrada de Dados
function calcularTempo(){
    const inputValor = parseFloat(document.getElementById('valor').value);
    const resultado = document.getElementById('resultado');
//Validação de Entrada
    if(isNaN(inputValor) || inputValor < 1.00){
        resultado.innerHTML = '<p style="color:red;">Valor insuficiente.</p>';
        return;
    }
    //Cálculo do Tempo
    let tempo = 0;
  let precoCobrado = 0;
//Definição das Faixas de Preço
  if (inputValor >= 3.00) {
    tempo = 120;
    precoCobrado = 3.00;
  } else if (inputValor >= 1.75) {
    tempo = 60;
    precoCobrado = 1.75;
  } else if (inputValor >= 1.00) {
    tempo = 30;
    precoCobrado = 1.00;
  }
//Cálculo do Troco
  const troco = (inputValor - precoCobrado).toFixed(2);
//Exibição do Resultado
  resultado.textContent = `Tempo: ${tempo} minutos. Troco: R$ ${troco}`; 
  
}
//Função para Limpar os Campos
function reset() {
  document.getElementById("valor").value = "";
  document.getElementById("resultado").textContent = "";
}