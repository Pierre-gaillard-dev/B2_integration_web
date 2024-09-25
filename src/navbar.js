const nav_menu = {
    opened: false,
    pop_up: null,

    toggle() {
        this.opened ? this.close() : this.open();
    },

    open() {
        this.opened = true;
        this.updateClass();
    },

    close() {
        this.opened = false;
        this.updateClass();
    },

    updateClass() {
        this.pop_up.classList.toggle("opened", this.opened);
        this.pop_up.classList.toggle("closed", !this.opened);
    },

    init() {
        this.pop_up = document.getElementById("nav_bar_popup");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    nav_menu.init();
});
