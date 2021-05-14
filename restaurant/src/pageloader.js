import {homeLoader} from './home.js'
import {menuLoader} from './menu.js'
import {contactLoader} from './contact.js'
pageLoader = () => {
    const content = document.getElementById('content');
    const ul = document.createElement('ul');
    const navBar = document.createElement('div')
    navBar.setAttribute('class', 'tab');
    content.appendChild(navBar);
    navBar.appendChild(ul);
    firstLi = document.createElement('li');
    ul.appendChild(firstLi)
    secondLi = document.createElement('li');
    ul.appendChild(secondLi)
    thirdLi = document.createElement('li');
    ul.appendChild(thirdLi)
    const homeNav = document.createElement('button');
    homeNav.textContent = 'Home';
    homeNav.setAttribute('class', '.hometablinks');
    const menuNav = document.createElement('button');
    menuNav.textContent = 'Menu';
    menuNav.setAttribute('class', '.menutablinks');
    const contactNav = document.createElement('button');
    contactNav.textContent = 'Contact';
    contactNav.setAttribute('class', '.contacttablinks');
    firstLi.appendChild(homeNav);
    secondLi.appendChild(menuNav);
    thirdLi.appendChild(contactNav);
    homeLoader();
    menuLoader();
    contactLoader();
    const homeContent = document.querySelector('#hometabcontent')
    const menuContent = document.querySelector('#menutabcontent')
    const contactContent = document.querySelector('#contacttabcontent')
    homeNav.addEventListener('click', () => {
        homeContent.style.display = 'block'
        menuContent.style.display = 'none'
        contactContent.style.display = 'none'
    })


    menuNav.addEventListener('click', () => {
        homeContent.style.display = 'none'
        menuContent.style.display = 'block'
        contactContent.style.display = 'none'
    })

    contactNav.addEventListener('click', () => {
        homeContent.style.display = 'none'
        menuContent.style.display = 'none'
        contactContent.style.display = 'block'
    })
}



export function pageLoader() {}