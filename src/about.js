import universalLogo from "./logo.png";

import createHomePage from "./home";
import createMenuPage from "./menu";

function createAboutPage() {
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
    mainContentContainer.classList.add("main-about-container");

    const mainInnerContentContainer = document.createElement("div");
    mainInnerContentContainer.classList.add("inner-about-container");

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("about-container");
    
    const welcomeHeader = document.createElement("h1");
    welcomeHeader.textContent = "If you have any further questions please refer to the offical Universal Studio Website.";

    const goodbyePara = document.createElement("p");
    goodbyePara.textContent = "Thank you for taking the time to look through some of the food options available to you, and we hope you have a wonderful time at Universal Orlando Florida!";


    welcomeDiv.appendChild(welcomeHeader);
    welcomeDiv.appendChild(goodbyePara);

    mainInnerContentContainer.appendChild(welcomeDiv);

    mainContentContainer.appendChild(mainInnerContentContainer);


    return mainContentContainer;
}

function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    
    const footerPara = document.createElement("p");
    footerPara.textContent = "© Samuel Davies 2024";

    footer.appendChild(footerPara);

    return footer;
}

export default createAboutPage;