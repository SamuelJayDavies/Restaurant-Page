import './style.css';
import universalLogo from "./logo.png";
import universalCityWalkBanner from "./citywalk-banner.jpg";
import antojitos from "./antojitos.jpeg";

function createHomePage() {
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
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About";

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
    welcomeHeader.textContent = "Welcome to Universal Food Insight";

    const introPara = document.createElement("p");
    introPara.textContent = "Here you can view the menu of any citywalk restaurant";

    welcomeDiv.appendChild(welcomeHeader);
    welcomeDiv.appendChild(introPara);

    mainInnerContentContainer.appendChild(welcomeDiv);

    const restaurantContainer = document.createElement("div");
    restaurantContainer.classList.add("restaurant-container");
    restaurantContainer.appendChild(createRestaurantPreview("Antojitos Authentic Mexican Food™", antojitos));
    mainInnerContentContainer.appendChild(restaurantContainer);
    mainContentContainer.appendChild(mainInnerContentContainer);

    return mainContentContainer;
}

function createRestaurantPreview(restaurantName, restaurantImg) {
    const restaurant = document.createElement("div");
    restaurant.classList.add("restaurant");

    const restaurantHeading = document.createElement("h1");
    restaurantHeading.textContent = restaurantName;

    restaurant.appendChild(restaurantHeading);  

    restaurant.style.backgroundImage = 'url('+ restaurantImg + ' )';
    return restaurant;
}

function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    
    const footerPara = document.createElement("p");
    footerPara.textContent = "© Samuel Davies 2024";

    footer.appendChild(footerPara);

    return footer;
}

export default createHomePage;