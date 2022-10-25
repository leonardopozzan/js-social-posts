const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const container = document.querySelector('#container');
for (let object of posts){
    const post = addElementClassHTML('div','post',container);
    const date = object.created.split('-').reverse().join('/');
    
    post.innerHTML = 
    `
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon" id="small-image-${object.id}">
                <img class="profile-pic" src="${object.author.image}" alt="${object.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${object.author.name}</div>
                <div class="post-meta__time">${date}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${object.content}</div>
    <div class="post__image">
        <img src="${object.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#nogo" data-postid="${object.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${object.id}" class="js-likes-counter">${object.likes}</b> persone
            </div>
        </div> 
    </div>    
    `
    //controllo sugli oggetti senza immagine di profilo
    if(!object.author.image){
        const myDivImage = document.querySelector(`#small-image-${object.id}`);
        //divido in nome e cognome
        const arrayName = object.author.name.split(' ');
        //prendo le iniziali e le printo a schermo
        const initials = `${arrayName[0][0]} ${arrayName[1][0]}`;
        myDivImage.innerHTML = `<span>${initials}</span>`;
        myDivImage.classList.add('profile-pic-default');
    }
}

const btns = document.querySelectorAll('.js-like-button');
let likeArray = [];

for(let element of btns){
    element.addEventListener('click',handleClick);
}


function handleClick(){
    //seleziono il tag <b> corrrispettivo al bottone che premo
    const numbOfLikes = document.querySelector(`#like-counter-${this.dataset.postid}`);
    if(!this.classList.contains('like-button--liked')){
        this.classList.add('like-button--liked');
        //incremento il contatore dei like
        let numb = parseInt(numbOfLikes.textContent);
        numb++;
        numbOfLikes.textContent = numb;
        //aggiungo l'id nella lista dei like premuti
        likeArray.push(this.dataset.postid);
    }else{
        this.classList.remove('like-button--liked');
        //decremento il contatore
        let numb = parseInt(numbOfLikes.textContent);
        numb--;
        numbOfLikes.textContent = numb;
        const index = likeArray.indexOf(this.dataset.postid);
        //tolgo l'id nella lista dei like premuti
        likeArray.splice(index,1);
    }
    console.log(likeArray)
}
