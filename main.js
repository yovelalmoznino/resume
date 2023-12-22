const PAGES = ["aboutMe", "army", "exprience", "studies", "volunteering"];
let activePage = "aboutMe";
window.addEventListener("load", () => {
    loading();
    navBarInit();
});

let loading = () => {
    let counter = 0;
    let timer = setInterval(() => {
        document.getElementById("loadingBar").innerText += ".";
        counter++;
        if (counter === 5) {
            clearInterval(timer);
            document.getElementById("loadingScreen").style.display = "none";
            document.getElementById("nav-bar").style.visibility = "visible";
            document.getElementById("contactInfo").style.visibility = "visible";
        }
    }, 1000);
}

let navBarInit = () => {
    for (let i = 0; i < PAGES.length; i++){
        document.getElementById(`${PAGES[i]}`).addEventListener("click", pageSelected);
    }
}

let pageSelected = (e) => {
    document.getElementById(activePage).classList.remove("activePage");
    activePage = e.target.id;
    document.getElementById(activePage).classList.add("activePage");
}