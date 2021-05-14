 homeLoader = () => {
    const homeContent = document.createElement('div');
    homeContent.setAttribute('id', 'hometabcontent');
    content.appendChild(homeContent)
    const title = document.createElement('h1');
    title.textContent = 'Restaurant';
    title.setAttribute('class', 'title');
    homeContent.appendChild(title);
    const image = document.createElement('IMG');
    image.setAttribute('id', 'mainImage');
    image.setAttribute('src', 'https://media-cdn.tripadvisor.com/media/photo-s/17/59/9f/7f/salon-principal.jpg');
    homeContent.appendChild(image);
    const presentation = document.createElement('p');
    presentation.setAttribute('id', 'presentation');
    presentation.textContent = 'This is our generic restaurant.';
    homeContent.appendChild(presentation);
}

export function homeLoader() {}