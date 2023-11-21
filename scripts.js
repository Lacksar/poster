
var a= " "

async function generateJoke(){

let data = await fetch("https://official-joke-api.appspot.com/random_joke");
let parsedData= await data.json()
// console.log(parsedData)
document.getElementById("joke").innerText= parsedData.setup + "\n \n" + parsedData.punchline;
a= parsedData.setup + "                                                                                      " + parsedData.punchline;

}


function writepost(){
a= document.getElementById("input").value;
document.getElementById("joke").innerText= a;
}


async function postJoke(){

   
     let data = await fetch(`https://graph.facebook.com/2254937581441660/feed?message=${a}&access_token=EAAMPpQjRZArEBO4ElF4CZASFI8u6j32matJtk4YhuUYKaDzJjeIy418PhA9dOzEq3TKgfnwe9FqXTAWMmzX0jPmcBPkjA5GuXJasmPF44ZCmK48qHLgnIfF8k23dEZCfPXZCRZC6kQZB4bjHc1qinKSHLK5J43ApuNhYcI4xS1ajF4uoG7wZBFFoOMbPyh8U1dwYLhAZD`, {
     
    // Adding method type
    method: "POST"});
    let parsedData= await data.json()
    console.log(parsedData)
    
    }
    
