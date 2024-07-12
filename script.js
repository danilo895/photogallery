let images = ['./img/img1.jpg', './img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg',
    'img/img11.jpg', 'img/img12.jpg', 'img/img13.jpg', 'img/img14.jpg', 'img/img15.jpg', 'img/img16.jpg', 'img/img17.jpg', 'img/img18.jpg', 'img/img19.jpg', 'img/img20.jpg', 'img/img21.jpg'
    , 'img/img22.jpg', 'img/img23.jpg', 'img/img24.jpg', 'img/img25.jpg'];



function showHeader() {
    document.getElementById('content').innerHTML += /*html*/`
                <header>    
        <h1 class="cinzel-headline">CITIES BY NIGHT</h1>
        </header>
        <div id="photoGallery" class="photoGallery d-none">
            <div id="imagesInOverlay" class="imagesInOverlay">
            <div class="responsiveCloseButton">
                <img onclick=closeGallery() class="closeButton" src="./img/close.png" alt="">
            </div>
                <div class="galleryStyle" id="currentImage"></div>
            </div>
        </div>
        <div class="picturesLandingPage" id="pictures"></div>
    `;
    showImages();
};


function showImages() {
    for (let i = 0; i < images.length; i++) {
    document.getElementById('pictures').innerHTML += /*html*/` 
        <img onclick=showGallery(${i}) src=${images[i]}>
    `
     };
}


function showGallery(i) {
    let currentImage = document.getElementById('currentImage');

    if (i<1){
        document.getElementById('pictures').classList.add('d-none');
        document.getElementById('photoGallery').classList.remove('d-none');
        currentImage.innerHTML = '';
        document.getElementById('currentImage').innerHTML += /*html*/`
                    <img onclick="previousImage(${i - 1})" class="arrowIconLeftStartOfGallery" src="./img/arrow-left.png" alt="">
                    <img class="imageStyleInGallery" src="${images[i]}" alt="">
                    <img onclick="nextImage(${i + 1})" class="arrowIconRight" src="./img/arrow-right.png" alt="">
        `
            }

    else if (i>=24){
        document.getElementById('pictures').classList.add('d-none');
        document.getElementById('photoGallery').classList.remove('d-none');
        currentImage.innerHTML = '';
        document.getElementById('currentImage').innerHTML += /*html*/`
                    <img onclick="previousImage(${i - 1})" class="arrowIconLeft" src="./img/arrow-left.png" alt="">
                    <img class="imageStyleInGallery" src="${images[i]}" alt="">
                    <img onclick="nextImage(${i + 1})" class="arrowIconRightEndOfGallery" src="./img/arrow-right.png" alt="">
        `           }  

    else{
        document.getElementById('pictures').classList.add('d-none');
        document.getElementById('photoGallery').classList.remove('d-none');
        currentImage.innerHTML = '';
        document.getElementById('currentImage').innerHTML += /*html*/`
                <img onclick="previousImage(${i - 1})" class="arrowIconLeft" src="./img/arrow-left.png" alt="">
                <img class="imageStyleInGallery" src="${images[i]}" alt="">
                <img onclick="nextImage(${i + 1})" class="arrowIconRight" src="./img/arrow-right.png" alt="">
    `
        }             
}


function closeGallery() {
    document.getElementById('photoGallery').classList.add('d-none');
    document.getElementById('pictures').classList.remove('d-none');
}


function nextImage(i) {
    let currentImage = document.getElementById('currentImage');

    if (i >= 24) {
        document.getElementById('pictures').classList.add('d-none');
        document.getElementById('photoGallery').classList.remove('d-none');
        currentImage.innerHTML = '';
        document.getElementById('currentImage').innerHTML += /*html*/`
                <img onclick="previousImage(${i - 1})" class="arrowIconLeft" src="./img/arrow-left.png" alt="">
                <img class="imageStyleInGallery" src="./img/img25.jpg" alt="">
                <img class="arrowIconRightEndOfGallery" src="./img/arrow-right.png" alt="">
        `;
                }
        

    else {
        document.getElementById('pictures').classList.add('d-none');
        document.getElementById('photoGallery').classList.remove('d-none');
        currentImage.innerHTML = '';
        document.getElementById('currentImage').innerHTML += /*html*/`
                <img onclick="previousImage(${i - 1})" class="arrowIconLeft" src="./img/arrow-left.png" alt="">
                <img class="imageStyleInGallery" src="${images[i + 1]}" alt="">
                <img onclick="nextImage(${i + 1})" class="arrowIconRight" src="./img/arrow-right.png" alt="">
    `;
        }
}


function previousImage(i) {
    let currentImage = document.getElementById('currentImage');
    if (i < 0) {
        document.getElementById('pictures').classList.add('d-none');
        document.getElementById('photoGallery').classList.remove('d-none');
        currentImage.innerHTML = '';
        document.getElementById('currentImage').innerHTML += /*html*/`
                <img class="arrowIconLeftStartOfGallery" src="./img/arrow-left.png" alt="">
                <img class="imageStyleInGallery" src="./img/img1.jpg" alt="">
                <img onclick="nextImage(${i + 1})" class="arrowIconRight" src="./img/arrow-right.png" alt="">
        `;
                }

                

    else {
        document.getElementById('pictures').classList.add('d-none');
        document.getElementById('photoGallery').classList.remove('d-none');
        currentImage.innerHTML = '';
        document.getElementById('currentImage').innerHTML += /*html*/`
                <img onclick="previousImage(${i - 1})" class="arrowIconLeft" src="./img/arrow-left.png" alt="">
                <img class="imageStyleInGallery" src="${images[i + 1]}" alt="">
                <img onclick="nextImage(${i + 1})" class="arrowIconRight" src="./img/arrow-right.png" alt="">
    `;
        }
}




