
// Variavel para armazenar os pontos do jogador
let pontos = 0;

// Variavel para armazenar se o questionario foi respondido ou não
let respondido = false;

function corrigirQuiz() {
	// Verifica se existem respostas presentes
	if(respondido) {
		alert("Atualize a página para tentar mais uma vez");
		return;
	}

	// Respostas marcadas
	const resposta_1 = document.querySelector('input[name="pergunta_1"]:checked');
	const resposta_2 = document.querySelector('input[name="pergunta_2"]:checked');
	const resposta_3 = document.querySelector('input[name="pergunta_3"]:checked');
	const resposta_4 = document.querySelector('input[name="pergunta_4"]:checked');
	const resposta_5 = document.querySelector('input[name="pergunta_5"]:checked');

	// Verifica se algumas das respostas não foram marcadas
	if(verificaVazio(resposta_1)) return;
	if(verificaVazio(resposta_2)) return;
	if(verificaVazio(resposta_3)) return;
	if(verificaVazio(resposta_4)) return;
	if(verificaVazio(resposta_5)) return;

	// Elementos da questão 1
	const label_1 = document.querySelector(`label[for=${resposta_1.id}]`);
	const resultado_1 = document.getElementById("resultado_1");
	exibirResultado(resultado_1, label_1, resposta_1.value);
	
	// Elementos da questão 2
	const label_2 = document.querySelector(`label[for=${resposta_2.id}]`);
	const resultado_2 = document.getElementById("resultado_2");
	exibirResultado(resultado_2, label_2, resposta_2.value);
	
	// Elementos da questão 3
	const label_3 = document.querySelector(`label[for=${resposta_3.id}]`);
	const resultado_3 = document.getElementById("resultado_3");
	exibirResultado(resultado_3, label_3, resposta_3.value);
	
	// Elementos da questão 4
	const label_4 = document.querySelector(`label[for=${resposta_4.id}]`);
	const resultado_4 = document.getElementById("resultado_4");
	exibirResultado(resultado_4, label_4, resposta_4.value);
	
	// Elementos da questão 5
	const label_5 = document.querySelector(`label[for=${resposta_5.id}]`);
	const resultado_5 = document.getElementById("resultado_5");
	exibirResultado(resultado_5, label_5, resposta_5.value);

	// Exibe o resultado final do quiz
	resultadoFinal();

	// Marca o quiz como respondido
	respondido = true;
}

function verificaVazio(resposta){
	// Exibe um alerta caso uma das respostas não tenham sido marcadas
	if(!resposta){
		alert("Você precisa marcar todas as respostas");
		return true;
	} 
	return false;
}

// Função para exibir o resultado com base na resposta
function exibirResultado(bloco, label, resultado){
	// Ativa exibição da div de resultado
	bloco.style.display = "flex";

	// Adquire imagens e texto dentro da div de resultado
	const img = document.querySelector(`#${bloco.id} img`);
	const texto = document.querySelector(`#${bloco.id} p`);

	// Atualiza exibição do resultado de acordo com a resposta
	if(resultado == "certo"){
		// Adiciona um ponto a variavel de pontuação
		pontos++;

		// Colore a label selecionada de verde
		label.classList.add("acertou");

		// Indicação de resultado positivo
		bloco.style.backgroundColor = "lightgreen";
		img.src = "imagens/sucesso.png";
		texto.innerHTML = "Resposta Correta!";
	} else {
		// Colore a label selecionada de vermelho
		label.classList.add("errou");
		
		// Indicação de resultado negativo
		bloco.style.backgroundColor = "pink";
		img.src = "imagens/erro.png";
		texto.innerHTML = "Resposta Errada!";
	}
}

// Exibe o placar final do jogador
function resultadoFinal(){
	// Adquire elementos responsáveis pelo placar
	const resultado_final = document.querySelector(".resultado-final");
	const titulo_resultado_final = document.querySelector(".resultado-final #titulo-resultado-final");
	const imagem_resultado_final = document.querySelector(".resultado-final #imagem-resultado-final");
	const pontos_resultado_final = document.querySelector(".resultado-final #pontos-finais");
	const comentario_resultado_final = document.querySelector(".resultado-final #comentario-resultado-final");

	// Atualiza placar de acordo com a pontuação
	if(pontos == 5){
		resultado_final.style.backgroundColor = "lightgreen";
		titulo_resultado_final.innerHTML = "Parabéns!!!"
		imagem_resultado_final.src = "imagens/premio.png";
		pontos_resultado_final.innerHTML = "5/5";
		comentario_resultado_final.innerHTML = "Você mandou bem, acertou todas as perguntas!";
	} 
	else if(pontos == 4){
		resultado_final.style.backgroundColor = "lightyellow";
		titulo_resultado_final.innerHTML = "Quase!!!"
		imagem_resultado_final.src = "imagens/medalha-de-honra.png";
		pontos_resultado_final.innerHTML = "4/5";
		comentario_resultado_final.innerHTML = "Você mandou bem, mas ainda não acertou todas, que tal tentar de novo?!";
	}
	else if(pontos < 4){
		resultado_final.style.backgroundColor = "pink";
		titulo_resultado_final.innerHTML = "Hmmm ..."
		imagem_resultado_final.src = "imagens/triste.png";
		pontos_resultado_final.innerHTML = `${pontos}/5`;
		comentario_resultado_final.innerHTML = "Você precisa pesquisar um pouco mais antes de tentar de novo ...";
	}

	resultado_final.style.display = "flex";
	
	setTimeout(function(){ document.getElementById("resultado-final").scrollIntoView();}, 500);
}

