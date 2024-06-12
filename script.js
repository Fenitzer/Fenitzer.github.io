let foto;
let botão;

let todos = []; //class = membro (membros, caio, felipe, luis, pedro, renato, victor, wagner)

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
    for (let i = 1; i < todos.length; i += 1) 
        {
            todos[i].style.display = "block";
        }
}

function fecharMenu()
{
    for (let i = 1; i < todos.length; i += 1) 
        {
            todos[i].style.display = "none";
        }
}

    window.onload=function()

{
    foto = document.getElementById("foto");
    botão = document.getElementById("botão");
    todos = document.getElementsByClassName("membro");

    console.log(todos);
    if (botão !== null)
        {
            botão.addEventListener("click", coisar);
        }
    for (let i = 0; i < todos.length; i ++)
        {
            todos[i].addEventListener("mouseover", abrirMenu);
        }
    for (let i = 0; i < todos.length; i ++)
        {
            todos[i].addEventListener("mouseout", fecharMenu);
        }
}