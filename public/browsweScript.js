const require = new XMLHttpRequest();
const url = "http://localhost:5000/api"
var number = 0

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }

    xhr.send();
}

SearchButton.addEventListener("click", e => {
    console.log('click' + number)
    number++

    getData()           
});

