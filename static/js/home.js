const grid = document.querySelector('.grid');

// Create an image dynamically 

const createImg = (url) => {
    const img = document.createElement('img');
    img.src = url;
    return img;
};

// Add all images to the grid
let i = 0;
setInterval(() => {
    if (i<14) {
        i++;
        grid.appendChild(createImg(`/static/images/${i}.jpg`));
    }
}, 120);