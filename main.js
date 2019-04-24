let image = document.querySelector("#image");

image.addEventListener('mouseover', function(){

    image.src = './image/image1.jpg';
    console.log('chosed')
})

let image_1 = document.querySelector("#image");

image_1.addEventListener('mouseout', function(){

    image.src = './image/image.jpg';
    console.log('chosed')
})