const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const credits = document.querySelector('.credits');
const docBody = document.querySelector('body');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let filenames = ["Owl-AndyC.jpg", "Reading-JoelM.jpg", "Cheesecake-MinkM.jpg", "Lanterns-LeonC.jpg", "Rainforest-BoudewijnH.jpg"];

/* Declaring the alternative text for each image file */
let alts = ['Photo by Andy Chilton on Unsplash: white and brown barn owl on yellow petaled flower field',
            'Photo by Joel Muniz on Unsplash: girl reading book',
            'Photo by Mink Mingle on Unsplash: slice blueberry cheesecake pie on white ceramic plate',
            'Photo by Leon Contreras on Unsplash: low angle shot of paper lanterns',
            'Photo by Boudewijn Huysmans on Unsplash: green trees under white clouds'
            // 'Photo by Eutah Mizushima on Unsplash: river between trees under blue sky'
        ];
  
  
  
  

/* Looping through images */
for (let i = 0; i < filenames.length; i++) {

    //create imgSrc link for filename
    let imgSrc = "/img/wa11/" + filenames[i];

    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgSrc);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);

    //event listener for click
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;

        const altSplit = e.target.alt.split(":");
        credits.textContent = altSplit[0];
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.className == 'dark') {
        btn.className = 'light';
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

        btn.style.backgroundColor = 'aliceblue';
        btn.style.color = 'black';

        docBody.style.color = 'aliceblue';
        docBody.style.backgroundColor = 'slategray';
    }
    else if (btn.className == 'light') {
        btn.className = 'dark';
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';

        btn.style.backgroundColor = 'black';
        btn.style.color = 'aliceblue';

        docBody.style.color = 'black';
        docBody.style.backgroundColor = 'aliceblue';
    }
});