import x8 from "./x8.js";
let nomeinput;
let cidadeinput;
let ocupaçãoinput;
let nomecard;
let cidadecard;
let ocupaçãocard;
let button;
let novop;
let main;
let card;


window.onload = function()

{
    nomeinput = document.getElementById("nomeinput");
    cidadeinput = document.getElementById("cidadeinput");
    ocupaçãoinput = document.getElementById("ocupaçãoinput");
    nomecard = document.getElementById("nomecard");
    cidadecard = document.getElementById("cidadecard");
    ocupaçãocard = document.getElementById("ocupaçãocard");
    button = document.getElementById("button");
    main = document.getElementById("main");
    //button.addEventListener("click", cadastrar);

    // function criarcard (objeto)
    // {   
    //     card = document.createElement("div");
    //     card.className = "card"
    //     card.innerHTML = 
    //                         `<div class="cardinfo">
    //             <table>
    //                 <tr>
    //                     <td>
    //                         Nome: 
    //                     </td>
    //                     <td id="nomecard">
    //                     ${objeto.nome}
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <td>
    //                         Cidade:
    //                     </td>
    //                     <td id="cidadecard">
    //                     ${objeto.cidade}
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <td>
    //                         Ocupação: 
    //                     </td>
    //                     <td id="ocupaçãocard">
    //                     ${objeto.ocup}
    //                     </td>
    //                 </tr>
    //             </table>
    //         </div>
    //         <div class="cardfoto">
    //             <img src="Imagens/Fenitzer.jpeg" alt="${objeto.foto}" class="foto">
    //         </div>`;
    //         main[0].appendChild(card);

        // novop = document.createElement("p");
        // novop.innerText = nome.value;
        // console.log(nome.value);
        // main[0].appendChild(novop);
    //}
        x8.map((objeto) => {
            card = document.createElement("div");
            card.className = "card"
            card.innerHTML = 
                                `<div class="cardinfo">
                    <table>
                        <tr>
                            <td>
                                Nome: 
                            </td>
                            <td id="nomecard">
                            ${objeto.nome}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Cidade:
                            </td>
                            <td id="cidadecard">
                            ${objeto.cidade}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ocupação: 
                            </td>
                            <td id="ocupaçãocard">
                            ${objeto.ocup}
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="cardfoto">
                    <img src="Imagens/Fenitzer.jpeg" alt="${objeto.foto}" class="foto">
                </div>`;
                main.appendChild(card);
        });
}