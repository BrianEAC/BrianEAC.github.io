contactLoader = () => {
    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contacttabcontent');
    content.appendChild(contactContent)
    const titleContact = document.createElement('h1');
    titleContact.textContent = 'Contact';
    titleContact.setAttribute('class', 'title');
    contactContent.appendChild(titleContact);
    const contactText = document.createElement('p');
    contactText.setAttribute('id', 'contactText');
    contactText.textContent = 'Contact us.';
    const contactNumber = document.createElement('p');
    contactNumber.textContent = 'Whatsapp +5491133017353';
    contactContent.appendChild(contactText);
    contactContent.appendChild(contactNumber);
}

export function contactLoader() { }