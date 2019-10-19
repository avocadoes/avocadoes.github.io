let image = document.querySelector('img');

image.onmouseover = function() {
    let src = image.getAttribute('src');
    if(src === 'images/circle.png') {
        image.setAttribute('src', 'images/square.png');
    } else {
        image.setAttribute('src', 'images/circle.png');
    }
}