// Hàm để hiển thị trang tương ứng
function showPage(page) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Ẩn tất cả các phần
    });

    const currentPage = document.getElementById(page);
    if (currentPage) {
        currentPage.style.display = 'block'; // Hiển thị phần hiện tại
    }
}

// Gọi hàm để hiển thị trang mặc định
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});
