// Elementos de referência das curiosidades
const curiosidade_titulo_pequeno = document.getElementById("curiosidade-titulo-pequeno");
const curiosidade_titulo_grande = document.getElementById("curiosidade-titulo-grande");
const curiosidade_imagem = document.getElementById("curiosidade-imagem");
const curiosidade_texto = document.getElementById("curiosidade-texto");

// Variavel para armazear a ultima variavel sorteada
// Para evitar de ao apertar o botão sortear novamente o mesmo valor
let ultima_curiosidade = 0;

// Array para armazenar os dados das curiosdades
const curiosidades = [
	{ 
		titulo: "O Cheiro de Lua", 
		imagem: "imagens/curiosidade_1.png",
		texto: "Alguns estudos revelam que com base no material de composição do solo e das rochas, a lua tem cheiro de pólvora, ou de cinzas",
	},
	{ 
		titulo: "O Cheiro do Espaço", 
		imagem: "imagens/curiosidade_2.png",
		texto: "O espaço é cheio de moléculas aromáticas que têm cheiro de metal, fumaça de diesel e churrasco. Astronautas já afirmaram que o espaço cheira como bife frito ou queimado",
	},
	{ 
		titulo: "As Patentes da NASA", 
		imagem: "imagens/curiosidade_3.png",
		texto: "Por incrível que pareça, a NASA é detentora de 1 a cada 1000 patentes nos EUA. Na busca de mandar astronautas para o espaço, eles acabam solucionando problemas que nós nem imaginamos",
	},
	{ 
		titulo: "Planeta dos Robôs", 
		imagem: "imagens/curiosidade_4.png",
		texto: "Atualmente Marte pode ser considerar o único planeta do nosso sistema solar habitado apenas por robôs! Dúzias de sondas e rovers não tripulados já foram enviados ao planeta, e alguns continuam em operação até hoje.",
	},
	{ 
		titulo: "Altura dos Astronauras", 
		imagem: "imagens/curiosidade_5.png",
		texto: "Para poder se tornar um astronauta, além de ser excelente em física e matemática, e necessário ter uma altura entre 1,57m e 1,91m no máximo!",
	},
	{ 
		titulo: "Greve Espacial", 
		imagem: "imagens/curiosidade_6.png",
		texto: "Em 1973, a tripulação da missão Skylab 4 realizou a primeira “greve” no espaço. A NASA estava apertando o tempo para realização das tarefas e sobrecarregando os astronautas, eles fizeram um dia de greve e a NASA propôs escalas mais razoaveis.",
	},
	{ 
		titulo: "Universo em Expansão", 
		imagem: "imagens/curiosidade_7.png",
		texto: "Embora esteja se expandindo em todas as direções, o Universo não tem um “centro” e, por estar em constante expansão, é impossível alcançar seus limites.",
	},
	{ 
		titulo: "Ninguém pode te ouvir gritar", 
		imagem: "imagens/curiosidade_8.png",
		texto: "Como as ondas sonoras precisam de um meio para viajar — e o espaço não conta com uma atmosfera —, o cosmos é completamente silencioso.",
	},
];

// Carrega uma curiosidade aletoriamente ao carregar a página
window.onload = novaCuriosidade();

// Função para atualizar os dados da curiosdade
function atualizaCuriosdade(id){
	curiosidade_titulo_pequeno.innerHTML = curiosidades[id].titulo;
	curiosidade_titulo_grande.innerHTML = curiosidades[id].titulo;
	curiosidade_imagem.src = curiosidades[id].imagem;
	curiosidade_texto.innerHTML = curiosidades[id].texto;
}

// Função para sortear e chamar a exibição de uma nova curiosidade
function novaCuriosidade(){
	// Sorteia um número aleatório para escolher uma curiosidade da lista
	let aleatorio = Math.floor(Math.random() * curiosidades.length);

	// Garante que ao clicar no botão, será exibida sempre uma curiosidade diferente
	while(ultima_curiosidade == aleatorio) {
		// Iria exibir novamente a mesma curiosidade
		// Então pede para recalcular um numero aleatorio
		aleatorio = Math.floor(Math.random() * curiosidades.length);
	}

	// Atualiza dados da Curiosdade
	ultima_curiosidade = aleatorio;
	atualizaCuriosdade(aleatorio);
}