import './style.css';
import logo from "./logo.png";

function createHomePage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHeader());
}

function createHeader() {
    const headerMain = document.createElement('div');
    headerMain.classList.add("main-header");

    const header = document.createElement("header");
    const nav = document.createElement("nav");

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

    header.appendChild(title);

    header.appendChild(nav);
    
    return headerMain;
}

export default createHomePage;