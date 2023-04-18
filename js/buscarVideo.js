import { conectaApi } from "./conectaApi.js"; // importando variavel de outro arquivo
import constroiCard from "./mostrarVideos.js"; // importando uma função de outro arquivo

//==================================//
//Criando função async com o valor que foi digitado no campo pesquisa, e passando eles para a função buscarVideo 
//do conectaApi
async function buscarVideo(evento){
    evento.preventDefault();
    const pesquisa = document.querySelector("[data-pesquisa]").value;
    const buscar = await conectaApi.buscarVideo(pesquisa);

    const lista = document.querySelector("[data-lista]");
//=================================================
//Criando um loop enquanto minha lista tiver um primeiro video/filho eu vou pegar essa lista e excluir ele
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
//============================================
//Em seguinda eu mostro apenas o video que eu pesquisei
    buscar.forEach(elemento =>  lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao,elemento.url, elemento.imagem)));

    //=======================================================
    //Validação para buscar de itens que não existem na lista    
    if(buscar.length == 0 ){
        lista.innerHTML = `<h2 class ="mensagem__titulo"> Não existem videos com esse termo </h2>`
    }
}
//=========================================
//Criando escutador para o evento de clicar em pesquisar
const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
botaoPesquisa.addEventListener('click', evento => buscarVideo(evento))