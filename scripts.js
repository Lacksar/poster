
var a= " "

async function generateJoke(){

let data = await fetch("https://v2.jokeapi.dev/joke/Programming");
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

   
     let data = await fetch(`https://graph.facebook.com/2254937581441660/feed?message=${a}&access_token=EAAMPpQjRZArEBO7tdQ2MRfoBfhJXh9YoljhZCLw4YcUERHcYaWrHVUd6WLsOBa6ZCbkJM3Eril48gMJPwPVxlHSZCGZC06NuAOiZCrNglG83Cq6fAyLracJJCvc2ZCt8URGZAcNnUwy2XLeJ0y3lIqTakhqIPWIi7BkHo3cI8Iimp53iWZAClo7zD00W0cvnoZBZBUs2ncZD`, {
     
    // Adding method type
    method: "POST"});
    let parsedData= await data.json()
    console.log(parsedData)
    
    }
    
