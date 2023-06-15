const Resistancescolor = [

    {name: 0.5 , color: "lightgreen"},
    {name: 0 , color: "green" },
    {name: 2 , color: "red"},
    {name: 1 , color: "gray"}
]


document.querySelector('#Random').addEventListener('click' , () => {

let url = fetch(`https://pokebuildapi.fr/api/v1/random/team`)
.then(response => response.json())
.then(data => {

    document.querySelector('#Pokemon-one-image-table').src = data[0].image;
    document.querySelector('#Pokemon-two-image-table').src = data[1].image;
    document.querySelector('#Pokemon-three-image-table').src = data[2].image;
    document.querySelector('#Pokemon-four-image-table').src = data[3].image;
    document.querySelector('#Pokemon-five-image-table').src = data[4].image;
    document.querySelector('#Pokemon-six-image-table').src = data[5].image;

    document.querySelector('.Pokemon-one-natural-table').innerHTML = data[0].apiResistances[0].damage_multiplier;
    document.querySelector('.Pokemon-two-natural-table').innerHTML = data[1].apiResistances[0].damage_multiplier;
    document.querySelector('.Pokemon-three-natural-table').innerHTML = data[2].apiResistances[0].damage_multiplier;
    document.querySelector('.Pokemon-four-natural-table').innerHTML = data[3].apiResistances[0].damage_multiplier;
    document.querySelector('.Pokemon-five-natural-table').innerHTML = data[4].apiResistances[0].damage_multiplier;
    document.querySelector('.Pokemon-six-natural-table').innerHTML = data[5].apiResistances[0].damage_multiplier

    document.querySelector('.Pokemon-one-fighting-table').innerHTML = data[0].apiResistances[1].damage_multiplier;
    document.querySelector('.Pokemon-two-fighting-table').innerHTML = data[1].apiResistances[1].damage_multiplier;
    document.querySelector('.Pokemon-three-fighting-table').innerHTML = data[2].apiResistances[1].damage_multiplier;
    document.querySelector('.Pokemon-four-fighting-table').innerHTML = data[3].apiResistances[1].damage_multiplier;
    document.querySelector('.Pokemon-five-fighting-table').innerHTML = data[4].apiResistances[1].damage_multiplier;
    document.querySelector('.Pokemon-six-fighting-table').innerHTML = data[5].apiResistances[1].damage_multiplier

    document.querySelector('.Pokemon-one-flying-table').innerHTML = data[0].apiResistances[2].damage_multiplier;
    document.querySelector('.Pokemon-two-flying-table').innerHTML = data[1].apiResistances[2].damage_multiplier;
    document.querySelector('.Pokemon-three-flying-table').innerHTML = data[2].apiResistances[2].damage_multiplier;
    document.querySelector('.Pokemon-four-flying-table').innerHTML = data[3].apiResistances[2].damage_multiplier;
    document.querySelector('.Pokemon-five-flying-table').innerHTML = data[4].apiResistances[2].damage_multiplier;
    document.querySelector('.Pokemon-six-flying-table').innerHTML = data[5].apiResistances[2].damage_multiplier;

    document.querySelector('.Pokemon-one-poison-table').innerHTML = data[0].apiResistances[3].damage_multiplier;
    document.querySelector('.Pokemon-two-poison-table').innerHTML = data[1].apiResistances[3].damage_multiplier;
    document.querySelector('.Pokemon-three-poison-table').innerHTML = data[2].apiResistances[3].damage_multiplier;
    document.querySelector('.Pokemon-four-poison-table').innerHTML = data[3].apiResistances[3].damage_multiplier;
    document.querySelector('.Pokemon-five-poison-table').innerHTML = data[4].apiResistances[3].damage_multiplier;
    document.querySelector('.Pokemon-six-poison-table').innerHTML = data[5].apiResistances[3].damage_multiplier;

    document.querySelector('.Pokemon-one-ground-table').innerHTML = data[0].apiResistances[4].damage_multiplier;
    document.querySelector('.Pokemon-two-ground-table').innerHTML = data[1].apiResistances[4].damage_multiplier;
    document.querySelector('.Pokemon-three-ground-table').innerHTML = data[2].apiResistances[4].damage_multiplier;
    document.querySelector('.Pokemon-four-ground-table').innerHTML = data[3].apiResistances[4].damage_multiplier;
    document.querySelector('.Pokemon-five-ground-table').innerHTML = data[4].apiResistances[4].damage_multiplier;
    document.querySelector('.Pokemon-six-ground-table').innerHTML = data[5].apiResistances[4].damage_multiplier;

    document.querySelector('.Pokemon-one-rock-table').innerHTML = data[0].apiResistances[5].damage_multiplier;
    document.querySelector('.Pokemon-two-rock-table').innerHTML = data[1].apiResistances[5].damage_multiplier;
    document.querySelector('.Pokemon-three-rock-table').innerHTML = data[2].apiResistances[5].damage_multiplier;
    document.querySelector('.Pokemon-four-rock-table').innerHTML = data[3].apiResistances[5].damage_multiplier;
    document.querySelector('.Pokemon-five-rock-table').innerHTML = data[4].apiResistances[5].damage_multiplier;
    document.querySelector('.Pokemon-six-rock-table').innerHTML = data[5].apiResistances[5].damage_multiplier;

    document.querySelector('.Pokemon-one-bug-table').innerHTML = data[0].apiResistances[6].damage_multiplier;
    document.querySelector('.Pokemon-two-bug-table').innerHTML = data[1].apiResistances[6].damage_multiplier;
    document.querySelector('.Pokemon-three-bug-table').innerHTML = data[2].apiResistances[6].damage_multiplier;
    document.querySelector('.Pokemon-four-bug-table').innerHTML = data[3].apiResistances[6].damage_multiplier;
    document.querySelector('.Pokemon-five-bug-table').innerHTML = data[4].apiResistances[6].damage_multiplier;
    document.querySelector('.Pokemon-six-bug-table').innerHTML = data[5].apiResistances[6].damage_multiplier;

    document.querySelector('.Pokemon-one-ghost-table').innerHTML = data[0].apiResistances[7].damage_multiplier;
    document.querySelector('.Pokemon-two-ghost-table').innerHTML = data[1].apiResistances[7].damage_multiplier;
    document.querySelector('.Pokemon-three-ghost-table').innerHTML = data[2].apiResistances[7].damage_multiplier;
    document.querySelector('.Pokemon-four-ghost-table').innerHTML = data[3].apiResistances[7].damage_multiplier;
    document.querySelector('.Pokemon-five-ghost-table').innerHTML = data[4].apiResistances[7].damage_multiplier;
    document.querySelector('.Pokemon-six-ghost-table').innerHTML = data[5].apiResistances[7].damage_multiplier;

    document.querySelector('.Pokemon-one-steel-table').innerHTML = data[0].apiResistances[8].damage_multiplier;
    document.querySelector('.Pokemon-two-steel-table').innerHTML = data[1].apiResistances[8].damage_multiplier;
    document.querySelector('.Pokemon-three-steel-table').innerHTML = data[2].apiResistances[8].damage_multiplier;
    document.querySelector('.Pokemon-four-steel-table').innerHTML = data[3].apiResistances[8].damage_multiplier;
    document.querySelector('.Pokemon-five-steel-table').innerHTML = data[4].apiResistances[8].damage_multiplier;
    document.querySelector('.Pokemon-six-steel-table').innerHTML = data[5].apiResistances[8].damage_multiplier;

    document.querySelector('.Pokemon-one-fire-table').innerHTML = data[0].apiResistances[9].damage_multiplier;
    document.querySelector('.Pokemon-two-fire-table').innerHTML = data[1].apiResistances[9].damage_multiplier;
    document.querySelector('.Pokemon-three-fire-table').innerHTML = data[2].apiResistances[9].damage_multiplier;
    document.querySelector('.Pokemon-four-fire-table').innerHTML = data[3].apiResistances[9].damage_multiplier;
    document.querySelector('.Pokemon-five-fire-table').innerHTML = data[4].apiResistances[9].damage_multiplier;
    document.querySelector('.Pokemon-six-fire-table').innerHTML = data[5].apiResistances[9].damage_multiplier;

    document.querySelector('.Pokemon-one-water-table').innerHTML = data[0].apiResistances[10].damage_multiplier;
    document.querySelector('.Pokemon-two-water-table').innerHTML = data[1].apiResistances[10].damage_multiplier;
    document.querySelector('.Pokemon-three-water-table').innerHTML = data[2].apiResistances[10].damage_multiplier;
    document.querySelector('.Pokemon-four-water-table').innerHTML = data[3].apiResistances[10].damage_multiplier;
    document.querySelector('.Pokemon-five-water-table').innerHTML = data[4].apiResistances[10].damage_multiplier;
    document.querySelector('.Pokemon-six-water-table').innerHTML = data[5].apiResistances[10].damage_multiplier;

    document.querySelector('.Pokemon-one-grass-table').innerHTML = data[0].apiResistances[11].damage_multiplier;
    document.querySelector('.Pokemon-two-grass-table').innerHTML = data[1].apiResistances[11].damage_multiplier;
    document.querySelector('.Pokemon-three-grass-table').innerHTML = data[2].apiResistances[11].damage_multiplier;
    document.querySelector('.Pokemon-four-grass-table').innerHTML = data[3].apiResistances[11].damage_multiplier;
    document.querySelector('.Pokemon-five-grass-table').innerHTML = data[4].apiResistances[11].damage_multiplier;
    document.querySelector('.Pokemon-six-grass-table').innerHTML = data[5].apiResistances[11].damage_multiplier;

    document.querySelector('.Pokemon-one-electric-table').innerHTML = data[0].apiResistances[12].damage_multiplier;
    document.querySelector('.Pokemon-two-electric-table').innerHTML = data[1].apiResistances[12].damage_multiplier;
    document.querySelector('.Pokemon-three-electric-table').innerHTML = data[2].apiResistances[12].damage_multiplier;
    document.querySelector('.Pokemon-four-electric-table').innerHTML = data[3].apiResistances[12].damage_multiplier;
    document.querySelector('.Pokemon-five-electric-table').innerHTML = data[4].apiResistances[12].damage_multiplier;
    document.querySelector('.Pokemon-six-electric-table').innerHTML = data[5].apiResistances[12].damage_multiplier;

    document.querySelector('.Pokemon-one-psy-table').innerHTML = data[0].apiResistances[13].damage_multiplier;
    document.querySelector('.Pokemon-two-psy-table').innerHTML = data[1].apiResistances[13].damage_multiplier;
    document.querySelector('.Pokemon-three-psy-table').innerHTML = data[2].apiResistances[13].damage_multiplier;
    document.querySelector('.Pokemon-four-psy-table').innerHTML = data[3].apiResistances[13].damage_multiplier;
    document.querySelector('.Pokemon-five-psy-table').innerHTML = data[4].apiResistances[13].damage_multiplier;
    document.querySelector('.Pokemon-six-psy-table').innerHTML = data[5].apiResistances[13].damage_multiplier;

    document.querySelector('.Pokemon-one-ice-table').innerHTML = data[0].apiResistances[14].damage_multiplier;
    document.querySelector('.Pokemon-two-ice-table').innerHTML = data[1].apiResistances[14].damage_multiplier;
    document.querySelector('.Pokemon-three-ice-table').innerHTML = data[2].apiResistances[14].damage_multiplier;
    document.querySelector('.Pokemon-four-ice-table').innerHTML = data[3].apiResistances[14].damage_multiplier;
    document.querySelector('.Pokemon-five-ice-table').innerHTML = data[4].apiResistances[14].damage_multiplier;
    document.querySelector('.Pokemon-six-ice-table').innerHTML = data[5].apiResistances[14].damage_multiplier;

    document.querySelector('.Pokemon-one-dragon-table').innerHTML = data[0].apiResistances[15].damage_multiplier;
    document.querySelector('.Pokemon-two-dragon-table').innerHTML = data[1].apiResistances[15].damage_multiplier;
    document.querySelector('.Pokemon-three-dragon-table').innerHTML = data[2].apiResistances[15].damage_multiplier;
    document.querySelector('.Pokemon-four-dragon-table').innerHTML = data[3].apiResistances[15].damage_multiplier;
    document.querySelector('.Pokemon-five-dragon-table').innerHTML = data[4].apiResistances[15].damage_multiplier;
    document.querySelector('.Pokemon-six-dragon-table').innerHTML = data[5].apiResistances[15].damage_multiplier;

    document.querySelector('.Pokemon-one-dark-table').innerHTML = data[0].apiResistances[16].damage_multiplier;
    document.querySelector('.Pokemon-two-dark-table').innerHTML = data[1].apiResistances[16].damage_multiplier;
    document.querySelector('.Pokemon-three-dark-table').innerHTML = data[2].apiResistances[16].damage_multiplier;
    document.querySelector('.Pokemon-four-dark-table').innerHTML = data[3].apiResistances[16].damage_multiplier;
    document.querySelector('.Pokemon-five-dark-table').innerHTML = data[4].apiResistances[16].damage_multiplier;
    document.querySelector('.Pokemon-six-dark-table').innerHTML = data[5].apiResistances[16].damage_multiplier;

    document.querySelector('.Pokemon-one-fairy-table').innerHTML = data[0].apiResistances[17].damage_multiplier;
    document.querySelector('.Pokemon-two-fairy-table').innerHTML = data[1].apiResistances[17].damage_multiplier;
    document.querySelector('.Pokemon-three-fairy-table').innerHTML = data[2].apiResistances[17].damage_multiplier;
    document.querySelector('.Pokemon-four-fairy-table').innerHTML = data[3].apiResistances[17].damage_multiplier;
    document.querySelector('.Pokemon-five-fairy-table').innerHTML = data[4].apiResistances[17].damage_multiplier;
    document.querySelector('.Pokemon-six-fairy-table').innerHTML = data[5].apiResistances[17].damage_multiplier;

  data.forEach( Object => {
    
    console.log(JSON.stringify(Object.apiResistances));

    if(Object.apiResistances == Resistancescolor.name) {

    document.querySelector('.table-resistance').style.color = Resistancescolor.color;

    }

  });
})


})





