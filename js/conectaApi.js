async function listaVideos(){
    try {
        const conexao = await fetch("http://localhost:3000/videos");   
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;

    } catch {
        listaVideos.innerHTML = `<h2 class = "mensagem__titulo"> Não foi possível carregar a lista de videos</h2>`
    }
    
}


//json-server --watch db.json lembrar de executar esse cod no terminal toda vez que abrir o vsCode

// criando requisição POST
async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method:"POST",
        headers:{
            "Content-type": "application/json" // usado para informar o tipo do arquivo que esta sendo enviado ou recebido, nesse caso o json.
        },
        body:JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
    if(!conexao.ok){
        throw new Error (
            "Não foi possivel enviar o video"
        )
    }
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida;
}
    async function buscarVideo(nomeDaBusca){
        const conexao = await fetch (`http://localhost:3000/videos?q=${nomeDaBusca}`) // (?q=) nome , voce faz uma buscar dentro dos itens dessa api
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida
    }

export const conectaApi = {     // exportando a funcao listaVideos que contem a requisição
    listaVideos,                 // para que possamos usa-la em outros arquivos.
    criaVideo,
    buscarVideo
}