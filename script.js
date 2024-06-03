window.onload=function()
{
    alert("Brazino o Jogo da Galera");
    var botão = document.getElementById("botão");
    var checar = document.getElementById("checar");
    botão.addEventListener("click", coisar);
    checar.addEventListener("click", check);

    function check()
    {
        var foto = document.getElementById("foto");
        alert (foto.src);
    }

    function coisar()
    {
       
        var foto = document.getElementById("foto");
        if (foto.src = "/Imagens/wag2.jpg") 
        {
            foto.src = "/Imagens/waganime.png" ;
        }
        else 
        {
            foto.src = "/Imagens/wag2.jpg";
        }
        alert (foto.src);
    }
}