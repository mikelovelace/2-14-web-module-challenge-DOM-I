const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// logo
const logo = document.querySelector("#logo-img")
logo.src = siteContent.images["logo-img"]




// links
const links = document.querySelectorAll("header nav a")
// const linksText = Object.values(siteContent.nav)

// links.forEach((link, index) => {
//   link.textContent = linksText[index]
//   link.classList.add("italic")
// })

links.forEach((link, index) => {
  link.textContent = siteContent["nav"][`nav-item-${index + 1}`]
  link.classList.add("italic")
})




// cta
const ctaH1 = document.querySelector(".cta h1")
ctaH1.textContent = siteContent["cta"]["h1"]

const ctaButton = document.querySelector(".cta button")
ctaButton.textContent = siteContent["cta"]["button"]

const ctaImage = document.querySelector(".cta #cta-img")
ctaImage.src = siteContent["images"]["cta-img"]




// main top
const topContent = document.querySelector(".main-content .top-content")

// main top h4
const h4Top = topContent.querySelectorAll(".text-content h4")
h4Top[0].textContent = siteContent["main-content"]["features-h4"]
h4Top[1].textContent = siteContent["main-content"]["about-h4"]

// main top p
const pTop = topContent.querySelectorAll(".text-content p")
pTop[0].textContent = siteContent["main-content"]["features-content"]
pTop[1].textContent = siteContent["main-content"]["about-content"]




// middle image
const midImage = document.querySelector(".main-content .middle-img")
midImage.src = siteContent["images"]["accent-img"]




// main bottom
const botContent = document.querySelector(".main-content .bottom-content")

// main bot h4
const h4Bot = botContent.querySelectorAll(".text-content h4")
h4Bot[0].textContent = siteContent["main-content"]["services-h4"]
h4Bot[1].textContent = siteContent["main-content"]["product-h4"]
h4Bot[2].textContent = siteContent["main-content"]["vision-h4"]

// main bot p
const pBot = botContent.querySelectorAll(".text-content p")
pBot[0].textContent = siteContent["main-content"]["services-content"]
pBot[1].textContent = siteContent["main-content"]["product-content"]
pBot[2].textContent = siteContent["main-content"]["vision-content"]



// contact
const contact = document.querySelector(".contact")

const contactH4 = contact.querySelector("h4")
contactH4.textContent = siteContent["contact"]["contact-h4"]

const contactP = contact.querySelectorAll("p")
contactP[0].textContent = siteContent["contact"]["address"]
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]



// footer
const footer = document.querySelector("footer a")
footer.textContent = siteContent["footer"]["copyright"]
footer.classList.add("bold")