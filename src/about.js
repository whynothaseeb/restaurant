export default function loadAbout() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content

    const container = document.createElement("div");
    container.classList.add("about-container");

    const title = document.createElement("h1");
    title.textContent = "About Brew Haven";

    const intro = document.createElement("p");
    intro.textContent = "More than just a cafe — we're a neighborhood staple where community and comfort come together over great coffee.";

    const section1 = document.createElement("section");
    section1.classList.add("about-section");

    const heading1 = document.createElement("h2");
    heading1.textContent = "Our Roots";

    const text1 = document.createElement("p");
    text1.textContent = "Founded in 2017, Brew Haven was built from a love of great coffee, local connections, and good conversation. What started as a tiny espresso counter has become a full-service cafe with heart.";

    const section2 = document.createElement("section");
    section2.classList.add("about-section");

    const heading2 = document.createElement("h2");
    heading2.textContent = "What We Believe";

    const text2 = document.createElement("p");
    text2.textContent = "We believe a great cup of coffee can turn a day around. That’s why we source ethically, support local roasters, and always greet you with a smile. Quality, kindness, and community are our core ingredients.";

    const section3 = document.createElement("section");
    section3.classList.add("about-section");

    const heading3 = document.createElement("h2");
    heading3.textContent = "Our Space";

    const text3 = document.createElement("p");
    text3.textContent = "Step inside Brew Haven and you'll find more than a drink — you’ll find a cozy corner to read, a quiet table to study, or a friendly barista who remembers your name. We’ve designed our space to feel like home.";

    // Assemble sections
    section1.append(heading1, text1);
    section2.append(heading2, text2);
    section3.append(heading3, text3);

    container.append(title, intro, section1, section2, section3);
    content.appendChild(container);
}
