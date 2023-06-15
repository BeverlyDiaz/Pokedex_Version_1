
document.querySelector('#type-pokemon').addEventListener('change', () => {

  const type = document.querySelector('#type-pokemon').value;

  fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`)
    .then(response => response.json())
    .then(data => {

      document.querySelector("#pokemon-type-result-one").src = data[0].image;
      document.querySelector("#pokemon-type-result-one").style = "display: block";
      document.querySelector("#pokemon-type-result-one-name").innerHTML = data[0].name;
      document.querySelector("#pokemon-type-result-two").src = data[10].image;
      document.querySelector("#pokemon-type-result-two").style = "display: block";
      document.querySelector("#pokemon-type-result-two-name").innerHTML = data[12].name;
      document.querySelector("#pokemon-type-result-three").src = data[20].image;
      document.querySelector("#pokemon-type-result-three").style = "display: block";
      document.querySelector("#pokemon-type-result-three-name").innerHTML = data[20].name;
      document.querySelector("#pokemon-type-result-four").src = data[30].image;
      document.querySelector("#pokemon-type-result-four").style = "display: block";
      document.querySelector("#pokemon-type-result-four-name").innerHTML = data[30].name;
      document.querySelector("#pokemon-type-result-five").src = data[4].image;
      document.querySelector("#pokemon-type-result-five").style = "display: block";
      document.querySelector("#pokemon-type-result-five-name").innerHTML = data[40].name;
      document.querySelector("#pokemon-type-result-six").src = data[5].image;
      document.querySelector("#pokemon-type-result-six").style = "display: block";
      document.querySelector("#pokemon-type-result-six-name").innerHTML = data[50].name;


    })
})