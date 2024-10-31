let mode = document.getElementById("mode1")
let theme = localStorage.getItem("theme");
if(!theme){
    localStorage.setItem("theme", "light");
    if (theme == "dark"){
        document.body.classList.add("dark")
    };
};

mode.addEventListener("click", () => {
    let theme = localStorage.getItem("theme");
    if(theme == "light"){
        document.body.classList.add("dark");
        localStorage.setItem("theme" , "dark");

    }
    if (theme === "dark") {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light")
    }
});