// Création du noeuds : footer 
let formulaire = document.querySelector("#register");
let footer = document.createElement("footer");
formulaire.after(footer);

// NAV
let navSocial = document.createElement("nav");
let navOther = document.createElement("nav");
navSocial.classList.add("social_nav");
footer.prepend(navSocial);
footer.append(navOther);
navOther.classList.add("other_nav");

// LISTE DE LA NAV SOCIAL

let listSocial = document.createElement("ul");
navSocial.prepend(listSocial);

// Liste DE LA NAV OTHER
let listOther = document.createElement("ul");
navOther.prepend(listOther);

// LES LI DE LA LISTE SOCIAL

let liFacebook = document.createElement("li");
listSocial.prepend(liFacebook);
let liInstagram = document.createElement("li");
liFacebook.after(liInstagram);
let liPinterest = document.createElement("li");
liInstagram.after(liPinterest);

// LES LI DE LA LISTE OTHER

let liCopyright = document.createElement("li");
listOther.prepend(liCopyright);
liCopyright.classList.add("copyright")
let liCgu = document.createElement("li");
liCopyright.after(liCgu);
let liMention = document.createElement("li");
liCgu.after(liMention);

// LES ELEMENT A DE CHAQUE LI SOCIAL

let facebook = document.createElement("a");
liFacebook.prepend(facebook);
facebook.setAttribute("href", "#");
facebook.setAttribute("title", "Facebook");

let instagram = document.createElement("a");
liInstagram.prepend(instagram);
instagram.setAttribute("href", "#");
instagram.setAttribute("title", "Instagram");

let pinterest = document.createElement("a");
liPinterest.prepend(pinterest);
pinterest.setAttribute("href", "#");
pinterest.setAttribute("title", "Pinterest");

// LES ELEMENTS A DE CHAQUES LI OTHER

// let copyright = document.createElement("p");
// liCopyright.prepend(copyright);                      ERREUUURRR
// copyright.textContent ="@copyright HedghogInLove";

let cgu = document.createElement("a")
liCgu.prepend(cgu)
cgu.setAttribute("href", "#")

let mention = document.createElement ("a")
liMention.prepend(mention)
mention.setAttribute("href", "#")

// LES ELEMENTS DANS LES A LI SOCIAL

let iFacebook = document.createElement("i");
facebook.prepend(iFacebook);
iFacebook.classList.add("fa-brands", "fa-facebook");

let iInstagram = document.createElement("i");
instagram.prepend(iInstagram);
iInstagram.classList.add("fa-brands", "fa-instagram");

let iPinterest = document.createElement("i");
pinterest.prepend(iPinterest);
iPinterest.classList.add("fa-brands", "fa-pinterest");

// Les elements dans les LI OTHER
mention.innerHTML = "Mentions légales"
cgu.innerHTML = "C.G.U"
liCopyright.innerHTML = "@copyright HedghogInLove"

