import carros from "./cars.js";

let marcainput;
let modeloinput;
let motorinput;
let potinput;
let paisinput;
let descinput;
let imginput;
let listcarros;
let card;
let button;
let carrosCadastrados = [];

window.onload = function()
{
    marcainput = document.getElementById ("marcainput");
    modeloinput = document.getElementById ("modeloinput");
    motorinput = document.getElementById ("motorinput");
    potinput = document.getElementById ("potinput");
    paisinput = document.getElementById ("paisinput");
    descinput= document.getElementById ("descinput");
    imginput = document.getElementById ("imginput");
    listcarros = document.getElementById("listcarros");
    button = document.getElementById("button");
    button.addEventListener("click", cadastrar);
    

    function criarCard (parametro)
    {
        card = document.createElement("div");
        card.className = "card"
        card.innerHTML = 
                            `<div id="desc">
                            Descrição: ${parametro.texto}
                            </div>
                            <div class="dados">
                                <table>
                                    <tr id="modelo">
                                        <th>Modelo: ${parametro.nome}</th>
                                    </tr>
                                    <tr id="foto">
                                        <td><img src="${parametro.foto}" alt=""></td>
                                    </tr>
                                    <tr>
                                        <td><table>
                                        <tr id="marca">
                                            <td class="tabela">Marca:</td>
                                            <td class="tabela">${parametro.marca}</td>
                                        </tr>
                                        <tr id="motor">
                                            <td class="tabela">Motor:</td>
                                            <td class="tabela">${parametro.motor}</td>
                                        </tr>
                                        <tr id="pot">
                                            <td class="tabela">Potência:</td>
                                            <td class="tabela">${parametro.potencia}</td>
                                        </tr>
                                        <tr id="pais">
                                            <td class="tabela">País de Origem:</td>
                                            <td class="tabela">${parametro.paisDeOrigem}</td>
                                        </td></table>
                                        </tr>
                                    </tr>
                                </table>
                            </div>`;
        listcarros.appendChild(card);
    }

    function cadastrar ()
    {
        let objeto =        
                    {
                        nome: modeloinput.value,
                        marca: marcainput.value,
                        motor: motorinput.value,
                        potencia: potinput.value,
                        paisDeOrigem: paisinput.value,
                        texto: descinput.value,
                        foto: imginput.value
                    };
                    criarCard (objeto);
                    carrosCadastrados.push (objeto);
                    let carrosCadastradosString = JSON.stringify (carrosCadastrados);

                    modeloinput.value = "";
                    marcainput.value = "";
                    motorinput.value = "";
                    potinput.value = ""
                    paisinput.value = ""
                    descinput.value = "";
                    imginput.value = "";    
                    
                    localStorage.setItem ("carrosCadastrados", carrosCadastradosString)
    }
    carros.map ((objeto) => 
        {
            criarCard (objeto)
        } ); 

    let carrosCarregadosBruto = localStorage.getItem ("carrosCadastrados");
    JSON.parse (carrosCarregadosBruto);
    let carroCadastradosSalvo = JSON.parse (carrosCarregadosBruto)
    carroCadastradosSalvo.map ((objeto) =>
                            {
                                criarCard (objeto)
                            }  );
    carrosCadastrados = carroCadastradosSalvo
}