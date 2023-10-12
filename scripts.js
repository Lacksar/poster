
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

   
    let data = await fetch(`https://graph.facebook.com/2254937581441660/feed?message=${a}&access_token=EAAMPpQjRZArEBO0FlnLAHcPZCyuDVE5YQ5EZAxE6o6tlUqcbqxZANAZB7iFcaF922wRyhCTQoMUlaB9vbZChkHrdcUNTvpt3DNz19V6NUgZB3VdZAPkwdwtUQJfX1YVLaACiaPE9JZCT1inr0BkoxybOwCmiZBoiPezboaAZBQZC7uLnDymAly98EVvSIXQaYUCkJZBZCYTK8CjdOh5GCRlonHE73v5dqC4QZDZD`, {
     
    // Adding method type
    method: "POST"});
    let parsedData= await data.json()
    console.log(parsedData)
    
    }
    
