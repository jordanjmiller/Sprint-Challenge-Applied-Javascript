// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(){
    let hDiv = document.createElement('div');
    hDiv.classList.add('header');
    let hSpan = document.createElement('span');
    hSpan.classList.add('date');
    hSpan.textContent = 'SMARCH 28, 2019';
    let hH1 = document.createElement('h1');
    hH1.textContent = 'Lambda Times';
    let span2 = document.createElement('span');
    span2.classList.add('temp');
    span2.textContent = '98°';
    hDiv.appendChild(hSpan);
    hDiv.appendChild(hH1);
    hDiv.appendChild(span2);
    return hDiv;
}
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
