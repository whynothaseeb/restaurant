import loadMenu from './menu.js';


export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content

    const container = document.createElement("div");
    container.classList.add("home-container");

    // Hero section
    const hero = document.createElement("section");
    hero.classList.add("hero");

    const title = document.createElement("h1");
    title.textContent = "Welcome to Eggalicious";

    const subtitle = document.createElement("p");
    subtitle.textContent = "Where coffee meets comfort.";

    const cta = document.createElement("button");
    cta.textContent = "Explore Our Menu";
    cta.classList.add("cta-button");
    cta.addEventListener("click", loadMenu)

    hero.append(title, subtitle, cta);

    // About/Intro section
    const about = document.createElement("section");
    about.classList.add("about-section");

    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = "Our Story";

    const aboutText = document.createElement("p");
    aboutText.textContent = "At Brew Haven, we believe in more than just coffee. We create moments — cozy mornings, creative afternoons, and relaxing evenings. Our beans are locally roasted, our pastries handmade, and our smiles always free.";

    about.append(aboutTitle, aboutText);

    // Hours section
    const hours = document.createElement("section");
    hours.classList.add("hours-section");

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Opening Hours";

    const hoursList = document.createElement("ul");
    const schedule = [
        "Monday – Friday: 7 AM – 7 PM",
        "Saturday: 8 AM – 6 PM",
        "Sunday: 8 AM – 4 PM",
    ];
    schedule.forEach(time => {
        const li = document.createElement("li");
        li.textContent = time;
        hoursList.appendChild(li);
    });

    hours.append(hoursTitle, hoursList);

    // Append all sections to the container
    container.append(hero, about, hours);
    content.appendChild(container);
}
