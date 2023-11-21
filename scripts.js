
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

   
     let data = await fetch(`https://graph.facebook.com/2254937581441660/feed?message=${a}&access_token=EAAMPpQjRZArEBO6vEtQMXctn6Gs2iXGqwJkSAELWtLjcE4k7LIEL7y54cLhEskt8ZA1ZBEEUjmi2p0pNCF0WEZCFZBS2gBmSouRDeUp505xzf9ntJRcGp3ZAgPMPVD4WnZAl0fucdshqrtDxdCJZC0fB7ZChSbs4OfSYkpkOBh7ZB98P6EGb7CGpZC4xCKKwJD7FNhMNjQZD`, {
     
    // Adding method type
    method: "POST"});
    let parsedData= await data.json()
    console.log(parsedData)
    
    }
    
