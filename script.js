document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Fungsi untuk membuka menu
    menuToggle.addEventListener("click", function() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    // Fungsi untuk menutup menu lewat tombol X
    closeMenu.addEventListener("click", function() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Fungsi untuk menutup menu saat area gelap (overlay) ditekan
    overlay.addEventListener("click", function() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});