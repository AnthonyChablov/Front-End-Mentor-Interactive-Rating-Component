// selecting elems
let mainCardBtnUI = document.querySelectorAll('.btn-style');
let submitBtnUI = document.querySelector('.main__card--submit');
let submitBtnTextUI = document.querySelector('.btn-submit');
let removeUI = document.querySelector('#remove');
let appendUI = document.querySelector('.main__card');

let buttonCurrentlySelected = 0;

// event listeners
mainCardBtnUI.forEach((elem,i,arr)=> elem.addEventListener('click',(e)=>{
    buttonCurrentlySelected=elem.innerText;
    let style1 = elem.style.backgroundColor= 'hsl(217, 12%, 63%)';
    let style2 = elem.style.color= '#262f38';
    arr.forEach((elem)=>{
        if (style1 && style2){
            style1 = elem.style.backgroundColor= '#262f38';
            style1 = elem.style.color = 'hsl(217, 12%, 63%)'
        }
    });
    elem.style.backgroundColor = 'hsl(25, 97%, 53%)';
    elem.style.color = '#fff';
}));

submitBtnUI.addEventListener('mousedown',(e)=>{
    submitBtnUI.style.backgroundColor = '#fff';
    submitBtnTextUI.style.color = 'hsl(25, 97%, 53%)';
});

submitBtnUI.addEventListener('mouseup',(e)=>{
    submitBtnUI.style.backgroundColor = 'hsl(25, 97%, 53%)';
    submitBtnTextUI.style.color = '#fff';

    // remove element
    removeUI.remove();

    // creating parent element to input into the dom
    let newDivUI = document.createElement('div');
    newDivUI.classList.add('main_new--img');
    newDivUI.style.textAlign='center'
    
    // creating image element
    let image = document.createElement('img');
    image.src = 'images/illustration-thank-you.svg';

    // creating sub-header
    let subheaderParent = document.createElement('div');
    let subheader = document.createElement('h3');
    subheader.innerText= `You've selected ${buttonCurrentlySelected} out of 5`;
    subheader.classList.add('new-subheader');
    subheaderParent.classList.add('new-subheader-parent');
    subheaderParent.appendChild(subheader);

    // creating main-header
    let mainHeaderParent = document.createElement('div');
    let mainHeader = document.createElement('h1');
    mainHeader.innerText = 'Thank you!';
    mainHeaderParent.classList.add('new-main-header');
    mainHeaderParent.appendChild(mainHeader);

    // creating paragraph
    let paragraph = document.createElement('p');
    let paragraphParent = document.createElement('div');
    paragraph.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    paragraphParent.appendChild(paragraph);
    paragraphParent.classList.add('new-paragraph');

    //appending stuff to parent
    newDivUI.appendChild(image);
    newDivUI.appendChild(subheaderParent);
    newDivUI.appendChild(mainHeaderParent);
    newDivUI.appendChild(paragraphParent);

    // append to ui
    appendUI.appendChild(newDivUI);
});





