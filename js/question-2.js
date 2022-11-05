const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE";
const apiKey = `a5813d7c6e0648f88b2e340b48bfb7b9`;
const urlGame = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultsContainer = document.querySelector(".results");

async function gameFacts(){
    try {
        const response = await fetch(urlGame);

    console.log(response);

    const data = await response.json;

    console.log(data);
    
    const facts = data.all; 

    resultsContainer.innerHTML = "";

    for(let i = 0; i < facts.length; i++){
        if(i === 8){
         break;   
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].text}`;

    }
    } catch(error){
        console.log("An error occured");
    }
    
}