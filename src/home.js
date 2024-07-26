import './style.css';
import universalLogo from "./logo.png";
import universalCityWalkBanner from "./citywalk-banner.jpg";
import antojitos from "./antojitos.jpeg";
import bigfire from "./bigfire.png";
import bobmarley from "./bobmarley.jpg";
import cowfish from "./cowfish.jpg";
import margaritaville from "./margaritaville.jpg";
import sportsgrill from "./sportsgrill.jpg";
import pat from "./pat.jpg";
import vivo from "./vivo.jpg";
import voodoo from "./voodoo.jpg";
import hardrock from "./hardrock.jpg";
import emporium from "./emporium.jpg";

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
    restaurantContainer.appendChild(createRestaurantPreview("Antojitos Authentic Mexican Food™", antojitos, "https://www.universalorlando.com/web/en/gb/things-to-do/dining/antojitos-authentic-mexican-food/menu.html"));
    restaurantContainer.appendChild(createRestaurantPreview("Bigfire American Fare", bigfire, "https://www.universalorlando.com/web/en/gb/things-to-do/dining/bigfire/menu.html"));
    restaurantContainer.appendChild(createRestaurantPreview("Bob Marley — A Tribute to Freedom℠", bobmarley, "https://www.universalorlando.com/web/en/gb/things-to-do/dining/bob-marley-a-tribute-to-freedom/menu.html"));
    restaurantContainer.appendChild(createRestaurantPreview("Cowfish", cowfish, "https://www.universalorlando.com/web/en/gb/things-to-do/dining/the-cowfish/menu.html"));
    restaurantContainer.appendChild(createRestaurantPreview("Jimmy Buffet's® Margaritaville®", margaritaville, "https://www.universalorlando.com/web/en/gb/things-to-do/dining/jimmy-buffetts-margaritaville/menu.html"));
    restaurantContainer.appendChild(createRestaurantPreview("NBC Sports Grill & Brew™", sportsgrill, "https://www.universalorlando.com/web/en/gb/things-to-do/dining/nbc-sports-grill-brew/menu.html"));
    restaurantContainer.appendChild(createRestaurantPreview("Pat O'Brien's®", pat, "https://www.universalorlando.com/web/en/gb/things-to-do/dining/pat-o-briens/menu.html"));
    restaurantContainer.appendChild(createRestaurantPreview("VIVO Italian Kitchen™", vivo, "https://www.universalorlando.com/web/en/gb/things-to-do/dining/vivo-italian-kitchen/menu.html"));
    restaurantContainer.appendChild(createRestaurantPreview("Voodoo Doughnuts", voodoo, "https://www.universalorlando.com/web/en/gb/things-to-do/dining/voodoo-doughnut/menu.html"));
    restaurantContainer.appendChild(createRestaurantPreview("Hard Rock Cafe® Orlando", hardrock, "https://cafe.hardrock.com/menu.aspx"));
    restaurantContainer.appendChild(createRestaurantPreview("Toothsome Chocolate Emporium", emporium, "https://www.universalorlando.com/web/en/gb/things-to-do/dining/toothsome-chocolate-emporium-and-savory-feast-kitchen/menu.html"));
    mainInnerContentContainer.appendChild(restaurantContainer);
    mainContentContainer.appendChild(mainInnerContentContainer);

    return mainContentContainer;
}

function createRestaurantPreview(restaurantName, restaurantImg, restaurantLink) {
    const restaurant = document.createElement("div");
    restaurant.classList.add("restaurant");

    if (restaurantName == "Hard Rock Cafe® Orlando") {
        restaurant.id = "hardrock";
    }
    
    restaurant.addEventListener("click", function() {
        window.open(restaurantLink, "_blank")
    })
    
    const restaurantFront = document.createElement("div");
    restaurantFront.classList.add("restaurant-front");

    const restaurantHeading = document.createElement("h1");
    restaurantHeading.textContent = restaurantName;

    restaurantFront.appendChild(restaurantHeading);  

    restaurant.appendChild(restaurantFront);

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