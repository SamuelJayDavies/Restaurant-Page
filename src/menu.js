

function createMenuPage() {
    console.log("test");
    const main = document.getElementById("main");
    main.textContent = "";
    const testHeader = document.createElement("h1");
    testHeader.textContent = "Testing";
    main.appendChild(testHeader);
}

export default createMenuPage;