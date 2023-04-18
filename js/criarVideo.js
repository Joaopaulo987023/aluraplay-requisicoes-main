import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]')

async function criarVideo (evento){
    evento.preventDefault(); // previnindo que a pagina atualize
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value
    const descricao = Math.floor(Math.random()*10).toString();

    await conectaApi.criaVideo(titulo,descricao,url,imagem);
    window.location.href= "../pages/envio-concluido.html";// redireciona a pagina para outra apos finalizar a tarefa
}

formulario.addEventListener('submit',(evento)=> criarVideo(evento)) // assim que eu der submit no formulario eu pego os valores da função criarVideo e envio para a requisição POST