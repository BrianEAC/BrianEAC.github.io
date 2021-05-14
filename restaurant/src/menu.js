menuLoader = () => {
    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menutabcontent');
    content.appendChild(menuContent)
    const imageMenu = document.createElement('IMG');
    imageMenu.setAttribute('id', 'menuImage');
    imageMenu.setAttribute('src', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-printable-black-and-white-menu-poster-template-a443097d2d553b534731037b583d192c_screen.jpg?ts=1561532887');
    menuContent.appendChild(imageMenu);
    const menuText = document.createElement('p');
    menuText.setAttribute('id', 'menuText');
    menuText.textContent = 'This is our generic menu.';
    menuContent.appendChild(menuText);
}

export function menuLoader() {}