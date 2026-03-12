import { readPage, constructPage } from './templateEngine.js'



const frontpage = readPage('./public/pages/frontpage/frontpage.html');

const contact = readPage('./public/pages/contact/contact.html')


const about = readPage('./public/pages/about/about.html');

export const frontpagePage = constructPage(frontpage, {
    documentTitle: 'Online Node.js REPL | Frontpage',
    cssLinks: ' <link rel="stylesheet" href="/pages/frontpage/frontpage.css">'
});
export const aboutPage = constructPage(about,{
    documentTitle: 'Online Node.js REPL',

});

export const contactPage = constructPage(contact)