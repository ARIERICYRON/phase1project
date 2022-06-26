
const getCars = () => {
    fetch('http://localhost:3000/Cars')
    .then(res => res.json())
    .then(data => {
        //console.log(data)
       data.forEach(cars => {
  html = ""
        html +=`
        <div class="results">
          <div id="car1" class="result">
            <p>${cars.name}</p>
           <img src = ${cars.image}/>
          <div class="buttons">
            <button id="get1">${cars.price}</button>
          </div>
        </div>
        `
        document.querySelector("#container").innerHTML = html
    });
    })

    
}
getCars()