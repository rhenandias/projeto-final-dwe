// Elementos de referência do menu lateral
const menu_lateral = document.getElementById("menu-lateral");
const body = document.getElementsByTagName("html")[0];

// Função para abrir o menu lateral
function abrirMenu(){
	// Habilita visualização do menu lateral
	menu_lateral.style = "display:flex";

	// Desabilita scroll na página enquanto o menu estiver aberto
	body.style.overflow = "hidden";
}

// Função para fechar o menu lateral
function fecharMenu(){
	// Habilita animação de esconder o menu
	menu_lateral.style.animationName = "fecha_menu";

	// Habilita novamente o scroll da página
	body.style.overflow = "scroll";
}
