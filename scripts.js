
var a= " "

async function generateJoke(){

let data = await fetch("https://official-joke-api.appspot.com/random_joke");
let parsedData= await data.json()
// console.log(parsedData)
document.getElementById("joke").innerText= parsedData.setup + "\n \n" + parsedData.punchline;
a= parsedData.setup + "                                                 " + parsedData.punchline;

}


function writepost(){
a= document.getElementById("input").value;
document.getElementById("joke").innerText= a;
}


async function postJoke(){

   
    let data = await fetch(`https://graph.facebook.com/2254937581441660/feed?message=${a}&access_token=EAAMPpQjRZArEBOxDuRjVEVEeqB8UcIBzENur5WZBo3zZAT5sgqPnw6aBcmodph5jz7KqtyajcyOil9t2XZAUTUjedSegnVkNE029J7Yj88gfA6nktkoAonfr72T6yxSiu93uHi7kUdE7V3cbMeuTZCTQzSEKnWbQClndEk3X61AGCDCcfcUlJWwlvzCjrhdlquFsZAZA3RFeHKyzbkSwBnNFo5PWwZDZD`, {
     
    // Adding method type
    method: "POST"});
    let parsedData= await data.json()
    console.log(parsedData)
    
    }
    