
document.querySelector('button').addEventListener('click', event => {

    let pokemonName = document.querySelector('#pokemon-name').value;


    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('#result-pokemon-image').forEach(data => data.style.display = "block")
            document.querySelectorAll('.icone-infos img').forEach(data => data.style.display = "block")
            document.querySelector('#result-pokemon-image').src = data.image;
            document.querySelector('#result-pokemon-name').innerHTML = data.name;
            document.querySelector('#HP').innerHTML = 'HP: ' + data.stats.HP;
            document.querySelector('#attack').innerHTML = 'Attack: ' + data.stats.attack;
            document.querySelector('#defense').innerHTML = 'Defense: ' + data.stats.defense;
            document.querySelector('#special_attack').innerHTML = 'Special attack: ' + data.stats.special_attack;
            document.querySelector('#special_defense').innerHTML = 'Special defense: ' + data.stats.special_defense;
            document.querySelector('#speed').innerHTML = 'Speed: ' + data.stats.speed;
            document.querySelector('#result-type-image').src = data.apiTypes[0].image;
            document.querySelector('#type-name').innerHTML = data.apiTypes[0].name;
            document.querySelector('.result').style.display = "block";
        
            const type = data.apiTypes[0].name;
            document.querySelector('#Suggestion-title').innerHTML = 'Suggestion Pokemon Type : ' + data.apiTypes[0].name;

            
            fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`)
            .then(response => response.json())
            .then (data =>{

            document.querySelector('#Suggestion-one-name').innerHTML = data[20].name;
            document.querySelector('#Suggestion-one-image').src = data[20].sprite;
            document.querySelector('#Suggestion-two-name').innerHTML = data[10].name;
            document.querySelector('#Suggestion-two-image').src = data[10].sprite;
            document.querySelector('#Suggestion-three-name').innerHTML = data[5].name;
            document.querySelector('#Suggestion-three-image').src = data[5].sprite;
            document.querySelector('.Suggestion-one').style.display = "block";
            document.querySelector('.Suggestion-two').style.display = "block";
            document.querySelector('.Suggestion-three').style.display = "block"; 

            })

        })

})
