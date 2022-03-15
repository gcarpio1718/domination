function lineThrough(){
    const lineThrough1 = document.querySelector('#arguments li');
    lineThrough.style.textDecoration = 'line-through';
}

lineThrough();

function setIamge(str1, str2){
    let image1 = document.querySelector(str1);
    image1.src = str2;
    image1.height = "300";
}

setImage('#image-1', 'https://www.capsulink.com/assets/img/hero/capsulink-short-link-personalization-by-device-location-language-time.svg' )
setImage('#image-2', 'https://www.capsulink.com/assets/img/features-mdm/api-for-developers.svg' )
setImage('#image-3', 'https://www.capsulink.com/assets/img/customer-profiles/customer-profile-promotion-tool-for-content-creators.svg')

function remover(){
    let deleteMe = document.querySelector('li');
    for(let i = 0; i<2; i++){
        deleteMe.remove();
        deleteMe = document.querySelector('li');

    }
}

remover();

function changeSize(id, size){
    let element = document.querySelector(id);
    element.style.fontSize = size;
}

changeSize('#heading', '50px');

function appendDom(domElement){
    let listItem = document.querySelector('ul');
    listItem.appendChild(domElement);
}

let newElement = document.createElement('img');
newElement.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.swipez.in%2Furl-shortener&psig=AOvVaw0ri_RbU-onlycuXawZv1ZB&ust=1647442289535000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDur_muyPYCFQAAAAAdAAAAABAU'
newElement.height = '300';
appendDom(newElement);

function makeInvisible(element){
    element.className = 'invisible';
}

let heading = document.querySelector('h1');

makeInvisible(heading);

function createListItem(text){
    let listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
}

let newListItem = createListItem('Hello World!');
appendDom(newListItem);

function newHeadersAndText(size, text){
    let newHeader = document.createElement(`h${size}`);
    newHeader.innerText = text;
    return newHeader;
}

let newHeader = newHeadersAndText('1', 'Hello People');
appendDom(newHeader);