
// var dataUrl = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30'; 
// function getimg(){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET',dataUrl,true);
//     xhr.send();
//     xhr.onload = function(){
//         var data = JSON.parse(this.responseText);
//         add_new_img(data);
//     }
// } 

// function add_new_img(dataset){
//     var gal = document.getElementById("gallery");
//     dataset.forEach(function(item){
//         console.log(item);
//         var img = document.createElement("img");
//         img.setAttribute("src",item.urls.small);
//         gal.appendChild(img);
//     });
// }


// const uri = `https://script.google.com/macros/s/AKfycbw5PnzwybI_VoZaHz65TpA5DYuLkxIFHUGjJ6jRTOje0E6bVo/exec?name=${name}&age=${age}`;
// fetch(uri,{method:'GET'})
// .then(res =>{
//     return res.text();
// }).then(result => {
//     document.getElementById('hi').innerText = result;
// });

// fetch('https://randomuser.me/api/')
// .then(res =>{
//     return res.json();
// }).then(result =>{
//     console.log(result);
//     var user_name = result.results[0].name;
//     var str = `name:${user_name['title']} ${user_name['first']}`;
//     str += `${user_name['last']}您好!`;
//     document.getElementById('h2').innerText = str;

// });

// let url = 'https://images.unsplash.com/photo-1513313778780-9ae4807465f0?auto=format&fit=crop&w=200&q=80'
// fetch(url)
// .then((response) => {
//     return response.blob();
// })
// .then((imageBlob) =>{
//     let img = document.createElement('IMG');
//     document.getElementById('newImg').appendChild(img);
//     img.src = URL.createObjectURL(imageBlob);
// })

var imglist_Url =  'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=100&format=json&nojsoncallback=1'; 
// var img_Url =  'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=53608779187&format=json&nojsoncallback=1'; 

function getimg(){
    fetch(imglist_Url)
    .then(response =>response.json())
    .then(data =>{
        const photoList = data.photos?.photo;
        add_new_img(photoList);
    })
} 

function add_new_img(dataset){ 
    const gallery = document.getElementById("gallery");

    dataset.forEach(photo => {
        const sizesUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=${photo.id}&format=json&nojsoncallback=1`;
        fetch(sizesUrl)
        .then(response =>response.json())
        .then(data => {
            const sizes = data.sizes.size;
            const largeSize = sizes.find(size => size.label === 'Large' || size.label === 'Medium');
 
            if (largeSize) {
                const img = document.createElement('img');
                img.src = largeSize.source;
                img.alt = photo.title;
                gallery.appendChild(img);
            }
        })

    });
}
