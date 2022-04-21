/* let planetList = document.getElementById('list')

fetch('https://swapi.dev/api/planets/?format=json')
    .then(res => res.json())
    .then(data => {
        let planeta = data.results
        console.log(planeta);

        function displayList (array = []){
            planetList.innerHTML = "";
            
            for (let i = 0; i< array.length; i++) {
                let item = array[i];
                
                
                let itemElement = document.createElement('div');
                itemElement.classList.add('list-item'); 

                let tittle = document.createElement('div');
                tittle.classList.add('item-name'); 
                tittle.innerText = `Planet name: ${item.name}`
               
                itemElement.appendChild(tittle);
                planetList.appendChild(itemElement); 
            
                let rotation = document.createElement('div');
                rotation.classList.add('itemRotation');
                rotation.innerText = `Rotation: ${item.rotation_period}`;
                itemElement.appendChild(rotation);

                let diameter = document.createElement('div');
                diameter.classList.add('item-diameter');
                diameter.innerText = `Diameter: ${item.diameter}`;
                itemElement.appendChild(diameter)
            }
        }

      displayList(planeta);
    })
 */


/* let data1 = []

fetch('https://swapi.dev/api/planets/?format=json')
.then(res => res.json())
.then(data => {
   
    let planeta = data.results;


  
    planeta.map((planeta)=>{
        data1 += `<div id="list-item">
        <h1 class="name">Planet name: <a href="">${planeta.name}</a></h1>
        <h3 class="diameter">diameter: ${planeta.diameter}</h3>
        <h3 class="gravity"> gravity: ${planeta.gravity}</h3>
        <h3 class="climate">climate: ${planeta.climate}</h3>
        <p class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, voluptate.</p>
        </div>`
    })

    let searchInput = document.getElementById('search-bar')
searchInput.addEventListener("input", e => {
    const value = e.target.value
     
})
    document.getElementById("list").innerHTML = data1;
    
}); */


const dataTemplate = document.querySelector('[data-template]')
const planetsContainer = document.querySelector('[data-planets-container]')
const search = document.querySelector('[data-input]')





fetch('https://swapi.dev/api/planets/?format=json')
    .then(res => res.json())
    .then(data => {
        let planeta = data.results;
        planeta.map(planet => {
            const list = dataTemplate.content.cloneNode(true).children[0]
            const name = list.querySelector('[data-name]')
            name.textContent = planet.name
            const diameter = list.querySelector('[data-diameter]')
            diameter.textContent = planet.diameter
            const gravity = list.querySelector('[data-gravity]')
            gravity.textContent = planet.gravity
            const climate = list.querySelector('[data-climate]')
            climate.textContent = planet.climate
            planetsContainer.append(list)
            return {
                name: planet.name, diameter: planet.diameter, gravity: planet.gravity,
                climate: planet.climate, element: list
            }
        })

        search.addEventListener("input", e => {
            const value = e.target.value.toLowerCase()
            let newList = []
            newList = planeta

            newList.forEach(element => {

                console.log(element.name);
            })

        })

    })
