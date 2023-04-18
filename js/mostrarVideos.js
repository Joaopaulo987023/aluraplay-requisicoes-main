//adicionando dinamicamente os videos que estão na fake api


import { conectaApi } from "./conectaApi.js"; // importando a api que foi exportada antes


const lista = document.querySelector("[data-lista]"); // pegando o elemento que contem o inicio da lista (ul) usando data atribuite 

export default function constroiCard(titulo,descricao,url,imagem){
    const video = document.createElement("li");   // criando um elemento (li) para depois colocar ele dentro da (ul)
    video.className = 'videos__item';               // dando um classe para esse elemento


    // logo abaixo adicionando todo o html com as alterações baseadas na Api fake
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"  
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`
    return video; // retorando o video para usar esse funcão depois
}

async function listaVideos(){
    const listaApi = await conectaApi.listaVideos();  // pegando os itens que estão no conectaApi.listaVideos 
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao,elemento.url, elemento.imagem))); // em seguida fazendo um forEach nessa lista e para cada elemento eu pego a minha var(lista) que é a minha (ul) e adiciono um filho pra ele no caso uma (li) constroiCard
}

listaVideos();
