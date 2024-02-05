console.log("Let's get this party started!");

const searchButton = document.querySelector('#searchbutton');
const input = document.querySelector('#search');
const container = document.querySelector('#container');
const removeButton = document.querySelector('#removebutton');

async function getRandomGif(){
    const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=GC9DpcPCiGXKTJ2K3aViuvIBLzBh1Ft8');
    console.log(response)
    const img = document.createElement('img')
    img.src = response.data.data.images.original.url;
    container.appendChild(img);
}

async function searchRandomGif(searchValue){
    try{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=GC9DpcPCiGXKTJ2K3aViuvIBLzBh1Ft8&tag=${searchValue}`;
        const response = await axios.get(url);
        const img = document.createElement('img')
        img.src = response.data.data.images.original.url;
        container.appendChild(img);
    }
    catch(e){
        alert('gif not found')
    }
}

searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchRandomGif(input.value);
    input.value = '';
})

removeButton.addEventListener("click", function () {
    container.innerHTML = '';
})
