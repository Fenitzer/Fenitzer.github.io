let foto;
let botão;
let membros;
let caio;
let felipe;
let luis;
let pedro;
let renato;
let victor;
let wagner;

function coisar()
{
    if (foto.src === "http://127.0.0.1:5500/Imagens/wag2.jpg") 
    {
        foto.src = "http://127.0.0.1:5500/Imagens/waganime.png" ;
    }
    else 
    {
        foto.src = "http://127.0.0.1:5500/Imagens/wag2.jpg";
    }
}
function abrirMenu()
{
    caio.style.display = "block"
    felipe.style.display = "block"
    luis.style.display = "block"
    pedro.style.display = "block"
    renato.style.display = "block"
    victor.style.display = "block"
    wagner.style.display = "block"
}

function fecharMenu()
{
    caio.style.display = "none";
    felipe.style.display = "none";
    luis.style.display = "none";
    pedro.style.display = "none";
    renato.style.display = "none";
    victor.style.display = "none";
    wagner.style.display = "none";
}

window.onload=function()

{
    foto = document.getElementById("foto");
    botão = document.getElementById("botão");
    membros = document.getElementById("membros");
    caio = document.getElementById("caio");
    felipe = document.getElementById("felipe");
    luis = document.getElementById("luis");
    pedro = document.getElementById("pedro");
    renato = document.getElementById("renato");
    victor = document.getElementById("victor");
    wagner = document.getElementById("wagner");


  console.log(botão);

    if (botão !== null)
    {
        botão.addEventListener("click", coisar);
    }
    
    membros.addEventListener("mouseover", abrirMenu);
    caio.addEventListener("mouseover", abrirMenu);
    felipe.addEventListener("mouseover", abrirMenu);
    luis.addEventListener("mouseover", abrirMenu);
    pedro.addEventListener("mouseover", abrirMenu);
    renato.addEventListener("mouseover", abrirMenu);
    victor.addEventListener("mouseover", abrirMenu);
    wagner.addEventListener("mouseover", abrirMenu);
    membros.addEventListener("mouseout", fecharMenu);
    caio.addEventListener("mouseout", fecharMenu);
    felipe.addEventListener("mouseout", fecharMenu);
    luis.addEventListener("mouseout", fecharMenu);
    pedro.addEventListener("mouseout", fecharMenu);
    renato.addEventListener("mouseout", fecharMenu);
    victor.addEventListener("mouseout", fecharMenu);
    wagner.addEventListener("mouseout", fecharMenu);
    
}
