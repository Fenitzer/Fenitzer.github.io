let salvar;
let carregar;
let sangue;
let sms = false;
let email = false;
let videogames = [];
let dados = [];

window.onload = function()
{
    salvar = document.getElementById("salvar");
    carregar = document.getElementById("carregar");
    dados = document.getElementsByClassName("dado");


    function save ()
    {
        sangue = document.querySelector('input[name="tipoSangue"]:checked');
        videogames = document.querySelectorAll('input[class="console"]:checked');
            
            if (document.querySelector('input[name="sms"]:checked'))
                {
                    sms = true;
                }
            if (document.querySelector('input[name="email"]:checked'))
                {
                    email = true;
                }
        for ( let i = 0; i < dados.length; i ++)
            {
                console.log(dados[i].value);
                localStorage.setItem("dados " + i , dados[i].value);
            }   
                localStorage.setItem("sangue", sangue.id);
                console.log(sangue.id); 
        for ( let i = 0; i < videogames.length; i ++)
            {
                console.log(videogames[i].id);
                localStorage.setItem("videogame " + i, videogames[i].id);
            }
        if ( sms == true)
            {
                console.log("SMS Autorizado");
                localStorage.setItem("sms", "true");
            }
            else
            {
                console.log("SMS Não Autorizado");
                localStorage.setItem("sms", "false");
            }
            if ( email == true)
                {
                    console.log("E-mail Autorizado");
                    localStorage.setItem("email", "true");
                }
                else
                {
                    console.log("E-mail Não Autorizado");
                    localStorage.setItem("email", "false");
                }
    }

    function load ()

    {
            for ( let i = 0; i < dados.length; i ++)
                {
                    dados[i].value = localStorage.getItem("dados " + i);
                }

                if (localStorage.getItem("sms") == 'true')
                    {
                        document.querySelector('input[name="sms"]').checked = true;
                    }
                    else 
                    {
                        document.querySelector('input[name="sms"]').checked = false;
                    }
                if (localStorage.getItem("email") == 'true')
                    {
                        document.querySelector('input[name="email"]').checked = true;
                    }
                    else 
                    {
                        document.querySelector('input[name="email"]').checked = false;
                    }
                    
                    let tiposangue = localStorage.getItem("sangue");

                document.querySelector(`'input[id="${tiposangue}'"]`).checked = true;
                    console.log('input[id="' + tiposangue + '"]');
    }

    salvar.addEventListener("click", save);
    carregar.addEventListener("click", load);

document.createElement();

}
            //template literal `'input[id="${tiposangue}'"]` 