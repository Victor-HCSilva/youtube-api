const name = document.querySelector("#channel-handle")?.innerText || "";// Nome do canal, não existe função usando isso por enaquanto
const position_red = document.querySelector("#center");// para background
const container = document.querySelector("#container"); // para background
const top_container = document.querySelector("#masthead-container");// para background
const background = document.querySelector("#content");// para background
const ytd = document.querySelector("ytd-app");// para background
const span = document.querySelector("#span");// Alguns dos comentários
const body = document.querySelector("body")// para background
const search = document.querySelector("#search");
const search_ = document.querySelector("#sb_ifc50")
const end = document.querySelector("#end");// para background
const search_form = document.querySelector("#search-form"); 
const image_position_logo = document.querySelector("#logo > div")//imagem do poco
const logo_youtube = document.querySelector("#logo-icon")//logo do you tube
const posicao_nome = document.querySelector("#country-code")
const imagem_temporaria = document.querySelector("#logo > ytd-yoodle-renderer > picture > img")
const fonte_youtube = document.querySelector("#yt-formatted-string")
const remove_button = document.querySelector("#remove")//remover botões
const divs = document.querySelectorAll("div"); 

logo_youtube.style.display = "None"//Retirando o logo do you tube, para substituir pela minha imagem
posicao_nome.style.display = "none"//Retirando a palavra "BR"
imagem_temporaria.style.display = "none"//Retirando...

posicao_nome.insertAdjacentHTML("afterend",`
    <nome 
    style='color: rgb(0,150,200);
    display: block;
    margin-top: 20px'>
    </nome>`)


// ATALHO / IMAGEM DO LOGO LICHES


// BOTÕES 

document.querySelector("#logo > div")

//posição da imagem no lugar do logo do you tube

image_position_logo.insertAdjacentHTML('beforeend', 
    `
    <style>
    #image_position{
        border-radius: 100%;
        margin-top: 20px;
    }
    <img id= 'image_position' src="https://e7.pngegg.com/pngimages/64/231/png-clipart-rainbow-animated-illustration-rainbow-drawing-roygbiv-rainbow-s-color-cartoon.png" width="60">
    `
    )
    
//<!---Este método abre o link em outra pg (target="_blank")-->
position_red.insertAdjacentHTML('beforebegin',

`
<style>
    .link{
        background-color: rgb(0,100,200);
        color:white;
        font-size:1.2rem !important;
        text-decoration:none;
        padding:2px;
        border-radius: 6px;
    }
    .link:hover{
        transition:1s;
        background-color: gold;
    }

    .background{
        background-color: rgb(0,0,0);
        color: white;/*Não é funciona assim*/
        font-size:1.5rem !important;
        text-decoration:none;
        padding:2px;
        border-radius: 6px;
    }
    .background:hover{
        transition:1s;
        background-color:rgb(0,100,200);
    }

</style>
<div id='my_style'>
<br>

<a class='link' id="sigaa" href="https://autenticacao.ufrn.br/sso-server/login?service=https%3A%2F%2Fsigaa.ufrn.br%2Fsigaa%2Flogin%2Fcas" target="_blank">SIGAA</a>

<a class='link' id="email_a" href="https://mail.google.com/mail/u/1/#inbox" target="_blank">Gmail</a>

<a class='link'  id="link_chat" href="https://chatgpt.com/" target="_blank">Chat-GPT</a>

<a class='link'  id="documentos"  href="https://docs.google.com/document/u/0/" target="_blank">Docs. Google</a>

<a class='link'id="Google_AI_Studio"  title="Google_AI_Studio" href="https://aistudio.google.com/app/prompts/new_chat?pli=1" target="_blank">AI Studio</a>

<a class='link' id="link_tradutor" href="https://www.google.com/search?q=tradutor&rlz=1C1VDKB_pt-ptBR1084BR1084&oq=tra&gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTIGCAAQRRg5MgwIARAjGCcYgAQYigUyDggCEEUYJxg7GIAEGIoFMgYIAxBFGDwyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDQzOTRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank">Google Tradutor</a>

<a class='link' id= "lichess" title="lichess" href="https://lichess.org/" target="_blank">Lichess</a>

<a class='link' id="Github" href="https://github.com/dashboard" target="_blank">Github</a>

<br>
<br>


<button class='background' id="red">Vermelho</button>
<button class='background' id="blue">Azul</button>
<button class='background' id="rosa">Rosa</button>
<button class='background' id="verde">Verde</button>
<button class='background' id="roxo">Roxo</button>

</div>
`
)

// simular F5
function recarregarPagina() {
    location.reload();
}

/*
add o atributo Id para poder manusear o body e mudar a cor
ytd.setAttribute("id","backgroundId")
body.setAttribute("style","color='red'")
let imagemRed = url("https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
pekka: https://cdnb.artstation.com/p/assets/images/images/036/895/459/large/ocellus-art-amp-production-services-04-promo-full.jpg?1618927353
vermelho original: https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

*/
function mudarParaVermelho(){
   // location.reload();
    //let background_red = "url('https://i.pinimg.com/236x/29/a3/af/29a3af339ab82df10b26292a452f8786.jpg')"

    let background_red = "url('https://cdnb.artstation.com/p/assets/images/images/036/895/459/large/ocellus-art-amp-production-services-04-promo-full.jpg?1618927353')"
    //PEKKA -->> position_red.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/036/895/459/large/ocellus-art-amp-production-services-04-promo-full.jpg?1618927353')"; 
    divs.forEach(div => {
        // Exemplo: alterar o fundo de cada div para amarelo
        div.style.backgroundImage = background_red;
      });
}
function mudarParaPadrao(){
    let background_default = "url('https://e1.pxfuel.com/desktop-wallpaper/847/615/desktop-wallpaper-plain-black-1920x1080-plain-black.jpg')";
    divs.forEach(div => {
        // Exemplo: alterar o fundo de cada div para amarelo
        div.style.backgroundImage = background_default;
      });
}
function mudarParaAzul(){
    let background_blue = "url('https://i.pinimg.com/236x/d1/45/d4/d145d45cf468df92ea36943b4c3e2bbd.jpg')";
   
    divs.forEach(div => {
        // Exemplo: alterar o fundo de cada div para amarelo
        div.style.backgroundImage = background_blue;
      });
}
function mudarParaRosa(){
    let background_pink = "url('https://i.pinimg.com/236x/1d/c5/17/1dc5175baced150120e8e7f28ae5dd2a.jpg')"
    divs.forEach(div => {
        // Exemplo: alterar o fundo de cada div para amarelo
        div.style.backgroundImage = background_pink;
      });   
}

function mudarParaVerde(){
    let backgorund_green = "url('https://i.pinimg.com/236x/61/5f/cb/615fcbd05360c2f5e4fe6fcfad550562.jpg')"
    divs.forEach(div => {
        // Exemplo: alterar o fundo de cada div para amarelo
        div.style.backgroundImage = backgorund_green;
      });
}
//link para o background roxo: https://w.wallhaven.cc/full/l3/wallhaven-l3ovyy.png

function mudarParaRoxo(){
    let background_violet = "url('https://i.pinimg.com/236x/cd/b5/4a/cdb54ad3e4e7ed2795a72cd1933db0fa.jpg')";
    divs.forEach(div => {
        // Exemplo: alterar o fundo de cada div para amarelo
        div.style.backgroundImage = background_violet;
      });
}

const padraoId = document.querySelector("#padrao");
const redId = document.querySelector("#red");
const blueId = document.querySelector("#blue");
const rosa_Id = document.querySelector("#rosa");
const verde_Id = document.querySelector("#verde");
const roxo_Id = document.querySelector("#roxo");

padraoId.addEventListener("click", mudarParaPadrao)
redId.addEventListener("click", mudarParaVermelho)
blueId.addEventListener("click", mudarParaAzul)
rosa_Id.addEventListener("click", mudarParaRosa)
verde_Id.addEventListener("click", mudarParaVerde)
roxo_Id.addEventListener("click", mudarParaRoxo)

const html = document.querySelector("html")

const botao = document.getElementById('botao');

//remover botoes

// Declaração das constantes
const id_sigaa_ = document.querySelector("#sigaa");
const id_email_ = document.querySelector("#email");
const id_email_a_ = document.querySelector("#email_a");
const id_chat_ = document.querySelector("#chat");
const id_link_chat_ = document.querySelector("#link_chat");
const id_AI_studio_ = document.querySelector("#AI_studio");
const id_tradutor_ = document.querySelector("#tradutor");
const id_link_tradutor_ = document.querySelector("#link_tradutor");
const id_lichess_ = document.querySelector("#lichess");
const id_github_ = document.querySelector("#github");
const id_Github_ = document.querySelector("#Github");
const id_padrao_ = document.querySelector("#padrao");
const id_red_ = document.querySelector("#red");
const id_blue_ = document.querySelector("#blue");
const id_rosa_ = document.querySelector("#rosa");
const id_verde_ = document.querySelector("#verde");
const id_roxo_ = document.querySelector("#roxo");



// Inserindo o botão
end.insertAdjacentHTML('beforebegin', `
    <style>
        #remove, #reset {
            color: white;
            font-size: 1.2rem;
            border-radius: 6px;
        }
        #remove{
            background: red;
        }
        #remove:hover{
            transition: 1s;
            background: darkred;
        }
        #reset{
            background: royalblue;
        }
        #reset:hover{
            transition: 1s;
            background: blue;
        }
    </style>
    <button id="remove" onclick="
    (function() {
        // Ocultando os elementos individualmente
        document.querySelector('#padrao').style.display = 'none';
        document.querySelector('#red').style.display = 'none';
        document.querySelector('#blue').style.display = 'none';
        document.querySelector('#rosa').style.display = 'none';
        document.querySelector('#verde').style.display = 'none';
        document.querySelector('#roxo').style.display = 'none';
        document.querySelector('#sigaa').style.display = 'none';
        document.querySelector('#email_a').style.display = 'none';
        document.querySelector('#link_chat').style.display = 'none';
        document.querySelector('#documentos').style.display = 'none';
        document.querySelector('#Google_AI_Studio').style.display = 'none';
        document.querySelector('#link_tradutor').style.display = 'none';
        document.querySelector('#lichess').style.display = 'none';
        document.querySelector('#Github').style.display = 'none';
    })();

">Remover</button>



    <button id="reset" onclick="
    (function() {
        // Ocultando os elementos individualmente
        document.querySelector('#padrao').style.display = 'inline';
        document.querySelector('#red').style.display = 'inline';
        document.querySelector('#blue').style.display = 'inline';
        document.querySelector('#rosa').style.display = 'inline';
        document.querySelector('#verde').style.display = 'inline';
        document.querySelector('#roxo').style.display = 'inline';
        document.querySelector('#sigaa').style.display = 'inline';
        document.querySelector('#email_a').style.display = 'inline';
        document.querySelector('#link_chat').style.display = 'inline';
        document.querySelector('#documentos').style.display = 'inline';
        document.querySelector('#Google_AI_Studio').style.display = 'inline';
        document.querySelector('#link_tradutor').style.display = 'inline';
        document.querySelector('#lichess').style.display = 'inline';
        document.querySelector('#Github').style.display = 'inline';

    })();

">Resetar</button>


    </script>
`);


