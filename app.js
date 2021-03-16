const btn = document.querySelector('#submit')
const search = document.querySelector('input')
const remove = document.querySelector('#remove')
const container = document.querySelector('#gifContainer')
console.log("Let's get this party started!");

async function findGif(){
    const val = search.value;
    const img = document.createElement('img')
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {api_key: 'mqew5zPcuEhHiIIZCU7oers1Hy2EoTL2', q:val}})
    for(let gifs of res.data.data){
        const random = (Math.random(res.length))
        img.src = gifs.images.fixed_height.url
    }  
    container.append(img);
}

btn.addEventListener('click', function(e){
e.preventDefault();
findGif();

})
remove.addEventListener('click', function(e){
e.preventDefault();
container.innerHTML = '';
})
