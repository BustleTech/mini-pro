
setEventListener = () => {
    document.querySelector("#menu-items").addEventListener("click", (event) => {
        if (event.path[0].tagName == "LI") {
            document.querySelector(`.${event.path[0].id}-card`).style.zIndex = 1;
        }
    })
}

(() => {
    this.setEventListener();
})();
