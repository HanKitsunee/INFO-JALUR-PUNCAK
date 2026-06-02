document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Buka Sidebar
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            sidebar.classList.add("active");
            overlay.classList.add("active");
            document.body.style.overflow = "hidden"; // kunci scroll body utama saat menu buka
        });
    }

    // Tutup Sidebar lewat tombol X
    if (closeMenu) {
        closeMenu.addEventListener("click", function() {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    }

    // Tutup Sidebar jika mengetuk area blur hitam luar
    if (overlay) {
        overlay.addEventListener("click", function() {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    }
});