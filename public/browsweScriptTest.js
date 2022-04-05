const require = new XMLHttpRequest();
var url = "http://localhost:5000/api?serchQuery="
var number = 0
var data

const getData = (query) => {

    //console.log(url += query)

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url += query);

    xhr.onload = () => {
        data = JSON.parse(xhr.response);
        console.log(data);
    }

    xhr.send();

    url = "http://localhost:5000/api?serchQuery="

}

function myFunction() {
            
    console.log('click' + number)
    number++

    //console.log(document.getElementById('1').value)

    getData(document.getElementById('1').value)   

    document.getElementById("demo").innerHTML = `
    <h1>Antal produkter ${data.length}</h1>
    ${data.map(function(pruduct){
      return `
      <div class="artical">
        <h2 class="artical-title">${pruduct.title}</h2>
        <h2 class="artical-price">Pris: ${pruduct.price} ${pruduct.currency} </h2>
      </div>
      ` 
    }).join('')}
    `

}