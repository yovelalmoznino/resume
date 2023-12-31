const PAGES = ["aboutMe", "army", "exprience", "studies", "volunteering"];
let activePage = "aboutMe";
window.addEventListener("load", () => {
    loading();
    navBarInit();
    contactInfoInit();
    initDegreesClick();
    initCloseBtn();
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
            document.getElementById(`${activePage}Page`).style.visibility = "visible";
        }
    }, 1000);
}

let navBarInit = () => {
    for (let i = 0; i < PAGES.length; i++) {
        document.getElementById(`${PAGES[i]}`).addEventListener("click", pageSelected);
    }
}

let pageSelected = (e) => {
    document.getElementById(`${activePage}Page`).style.visibility = "hidden";
    document.getElementById(activePage).classList.remove("activePage");
    activePage = e.target.id;
    document.getElementById(activePage).classList.add("activePage");
    document.getElementById(`${activePage}Page`).style.visibility = "visible";
}

let contactInfoInit = () => {
    document.getElementById("mail").addEventListener("click", () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=y.almoznino23@gmail.com", "_blank");
    });
    document.getElementById("phoneNumber").addEventListener("click", () => {
        window.open("https://wa.me/+972508582003", "_blank");
    })
}

let initDegreesClick = () => {
    document.getElementById("idf").addEventListener("click", ()=>{
        document.getElementById("pdf").src = "./assets/media/idf.pdf";
        setTimeout(()=>{
            document.getElementById("pdfView").style.visibility = " visible";
        },100);
    });
    document.getElementById("magshimim").addEventListener("click", ()=>{
        document.getElementById("pdf").src = "./assets/media/magshimim.pdf";
        setTimeout(()=>{
            document.getElementById("pdfView").style.visibility = " visible";
        },100);
    });
    document.getElementById("project").addEventListener("click", ()=>{
        document.getElementById("pdf").src = "./assets/media/project.pdf";
        setTimeout(()=>{
            document.getElementById("pdfView").style.visibility = " visible";
        },100);
    });
    document.getElementById("bagrut").addEventListener("click", ()=>{
        document.getElementById("pdf").src = "./assets/media/bagrut.pdf";
        setTimeout(()=>{
            document.getElementById("pdfView").style.visibility = " visible";
        },100);
    });
}

let initCloseBtn = () => {
    document.getElementById("closeBtn").addEventListener("click", ()=>{
        document.getElementById("pdfView").style.visibility = "hidden";
    })
}