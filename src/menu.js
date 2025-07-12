export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content

    const container = document.createElement("div");
    container.classList.add("menu-container");

    const title = document.createElement("h1");
    title.textContent = "Breakfast Menu";

    const subtitle = document.createElement("p");
    subtitle.textContent = "Start your day with something delicious.";

    const menuSection = document.createElement("section");
    menuSection.classList.add("menu-section");

    // Sample breakfast items
    const breakfastItems = [
        {
            name: "Avocado Toast",
            description: "Sourdough toast with smashed avocado, poached egg, and chili flakes.",
            price: "$8.50",
        },
        {
            name: "Classic Pancakes",
            description: "Fluffy pancakes served with maple syrup and seasonal berries.",
            price: "$7.00",
        },
        {
            name: "Breakfast Burrito",
            description: "Scrambled eggs, cheddar, black beans, and salsa wrapped in a tortilla.",
            price: "$9.00",
        },
        {
            name: "Granola & Yogurt",
            description: "House-made granola, Greek yogurt, and fresh fruit.",
            price: "$6.50",
        },
        {
            name: "Smoked Salmon Bagel",
            description: "Toasted bagel with cream cheese, smoked salmon, red onion, and capers.",
            price: "$10.00",
        }
    ];

    // Create each menu item
    breakfastItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const name = document.createElement("h2");
        name.textContent = item.name;

        const desc = document.createElement("p");
        desc.textContent = item.description;

        const price = document.createElement("span");
        price.textContent = item.price;
        price.classList.add("price");

        menuItem.append(name, desc, price);
        menuSection.appendChild(menuItem);
    });

    container.append(title, subtitle, menuSection);
    content.appendChild(container);
}
