document.querySelectorAll('.arrow').forEach(data => {
    data.addEventListener('click', () => {


        const id = Math.floor(Math.random()* (850 - 1)) + 1;
        console.log(id)
        
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            
        document.querySelectorAll('.image-slide')[0].src = data.image;
        document.querySelectorAll('.name-slide')[0].innerHTML = data.name;

        })
    
    
    
    })
})
