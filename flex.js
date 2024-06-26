window.onload = async function ()
{   
    let a = await fetch ("https://swapi.dev/api/people/1?format=wookiee");
    let b = await a.json();
    console.log(b.whrascwo);
}