const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE";
const apiKey = "a5813d7c6e0648f88b2e340b48bfb7b9";
const urlGame = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;
const apiGame = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=a5813d7c6e0648f88b2e340b48bfb7b9";
const resultsContainer = document.querySelector(".results");

    fetch("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=a5813d7c6e0648f88b2e340b48bfb7b9")
.then(function(response) {
    return response.json()
})
.then(function(api_response) { 
    
    
    for(let i = 0; i < 8; i++){

        if(i === 7){
            function removeElementsByClass(className){
                const elements = document.getElementsByClassName(className);
                while(elements.length > 0){
                    elements[0].parentNode.removeChild(elements[0]);
                }
            }
            
            removeElementsByClass('loader');
           }

    console.log(api_response.results[i].name)
    console.log(api_response.results[i].rating)
    console.log(api_response.results[i].tags.length)
        resultsContainer.innerHTML += "<div class='result'>"+"<ul>"+"<li>"
        +api_response.results[i].name
        +"</li>"+"<li>"+api_response.results[i].rating+"</li>"+"<li>"
        +api_response.results[i].tags.length+"</li>"+"</ul>"+"</div>";

}})
.catch(function(error){
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An Error occured when calling this API.");
})
    



/*fetch("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=a5813d7c6e0648f88b2e340b48bfb7b9")
    .then(function(response) {
        return response.json()
    })
    .then(function(api_response) { 
        
        
        for(let i = 0; i < 8; i++){

            if(i === 8){
                document.querySelector('.loader').remove();
               }

        console.log(api_response.results[i].name)
        console.log(api_response.results[i].rating)
        console.log(api_response.results[i].tags.length)
            resultsContainer.innerHTML += "<div class='result'>"+"<ul>"+"<li>"
            +api_response.results[i].name
            +"</li>"+"<li>"+api_response.results[i].rating+"</li>"+"<li>"
            +api_response.results[i].tags.length+"</li>"+"</ul>"+"</div>";

            /*if(i === 8){
             loader = document.querySelector('.loader').remove();
            }}})/*

    /*function removeElementsByClass(className){
        const elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }*/

    
    /*removeElementsByClass('loader');*/
/*async function gameFacts(){
    try {
        let response = await fetch(apiGame);

    console.log(response);

    let data = await response.json();

    console.log(data);
    
    const facts = data.all; 

    console.log(data.results.name);

    const names = facts[i].name;
    const rating = facts[i].rating;
    const tags = facts[i].tags;


    resultsContainer.innerHTML = "";

    for(let i = 0; i < facts.length; i++){
        if(i === 4){
         break;   
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i]}`;

    }
    } catch(error){
        console.log("An error occured");
    }
    
}

gameFacts()*/