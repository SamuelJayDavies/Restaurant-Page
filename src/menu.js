import universalLogo from "./logo.png";

import createHomePage from "./home";
import createAboutPage from "./about";

import messiBurger from "./messiBurger.jpeg";
import smokehauseBurger from "./smokehauseBurger.jpg";
import cheeseRoll from "./cheeseRoll.jpg";
import guac from "./guac.jpg";

function createMenuPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHeader());
    main.appendChild(createContent());
    main.appendChild(createFooter());
}

function createHeader() {
    const headerMain = document.createElement('div');
    headerMain.classList.add("main-header");

    const topHeader = document.createElement("div");
    topHeader.classList.add("top-header");

    const logo = document.createElement("img");
    logo.src = universalLogo;
    
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    topHeader.appendChild(logo);
    headerMain.appendChild(header);

    const title = document.createElement("h1");
    title.textContent = "Universal Food Insight";
    title.classList.add("main-title");

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", function() {
        createHomePage();
    }, false);
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", function() {
        createMenuPage();
    }, false);
    
    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About";
    aboutBtn.addEventListener("click", function() {
        createAboutPage();
    }, false);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);

    topHeader.appendChild(title);

    header.appendChild(topHeader);

    header.appendChild(nav);
    
    return headerMain;
}

function createContent() {
    const mainContentContainer = document.createElement("div");
    mainContentContainer.classList.add("main-content-container");

    const mainInnerContentContainer = document.createElement("div");
    mainInnerContentContainer.classList.add("inner-main-content-container");

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome-container");
    
    const welcomeHeader = document.createElement("h1");
    welcomeHeader.textContent = "Here are some of the featured items";

    welcomeDiv.appendChild(welcomeHeader);

    mainInnerContentContainer.appendChild(welcomeDiv);

    const menuPreviewContainer = document.createElement("div");
    menuPreviewContainer.classList.add("menu-container");

    menuPreviewContainer.appendChild(createMenuPreview("The Messi Burger", messiBurger, "The Messi Burger launched in March 2022 to worldwide fandom. The fan favorite burger features a juicy double stack of fresh ground beef patties, met with a winning combination of toppings: provolone cheese, sliced chorizo, caramelized red onion and Hard Rock's signature, spicy, smoky sauce, served on a toasted brioche bun with shredded romaine lettuce and vine-ripened tomato.", "Hard Rock Cafe® Orlando"));
    menuPreviewContainer.appendChild(createMenuPreview("Smokehouse Stack", smokehauseBurger, "Located at the NBC Sports Grill & Brew, topped with all things smoked - brisket, pork, gouda and then slathered in barbecue sauce.", "NBC Sports Grill & Brew"));
    menuPreviewContainer.appendChild(createMenuPreview("Cheeseburgooshi", cheeseRoll, "Cowfish Sushi Burger Bar thinking outside of the box with this deep-fried take on a sushi roll. Cooks wrap a black Angus bacon cheeseburger in soy paper and potato shards, before deep-frying it and slicing it into rounds. This is one time you won’t mind eating your kids’ scraps.", "Cowfish Sushi Burger Bar"));
    menuPreviewContainer.appendChild(createMenuPreview("Antojitos Style Tamales", guac, "Delicious meal found in Antojitos Authentic Mexican Food. Tamales with house-made mole and Yucantan-style mahi cooked with banana leaves.", "Antoitos Authentic Mexican Food"));

    mainInnerContentContainer.appendChild(menuPreviewContainer);
    mainContentContainer.appendChild(mainInnerContentContainer);


    return mainContentContainer;
}

function createMenuPreview(itemName, itemImg, itemDesc, itemRestaurantLocation) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuItemImg = document.createElement("img");
    menuItemImg.src = itemImg;
    menuItemImg.classList.add("menu-img");

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = itemName;
    menuHeader.classList.add("menu-header");

    const menuHighlight = document.createElement("div");
    menuHighlight.classList.add("menu-highlight");

    menuHighlight.appendChild(menuItemImg);
    menuHighlight.appendChild(menuHeader);

    const menuDesc = document.createElement("p");
    menuDesc.textContent = itemDesc;
    menuDesc.classList.add("menu-desc");

    menuItem.appendChild(menuHighlight);
    menuItem.appendChild(menuDesc);
    return menuItem;

}

function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    
    const footerPara = document.createElement("p");
    footerPara.textContent = "© Samuel Davies 2024";

    footer.appendChild(footerPara);

    return footer;
}

export default createMenuPage;