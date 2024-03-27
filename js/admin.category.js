function showForm() {
    var formAdd = document.querySelector('.formAdd');
    var overlay = document.querySelector('.overlay');
    var blurEffect = document.createElement('div');
    blurEffect.classList.add('blur-effect');
    document.body.appendChild(blurEffect);
    formAdd.classList.add('show');
    overlay.style.display = 'block';
}

function closeForm() {
    var formAdd = document.querySelector('.formAdd');
    var overlay = document.querySelector('.overlay');
    var blurEffect = document.querySelector('.blur-effect');
    document.body.removeChild(blurEffect);
    formAdd.classList.remove('show');
    overlay.style.display = 'none';
}
// Lấy trạng thái hiện tại của danh sách từ localStorage
let categoryList = JSON.parse(localStorage.getItem("category")) || [];

// Lấy thẻ input và nút lưu lại từ HTML
let inputName = document.querySelector('.inp');
let saveButton = document.querySelector('.butn');

// Xử lý sự kiện khi nhấp vào nút "Lưu lại"
saveButton.addEventListener('click', function() {
    // Lấy giá trị từ trường input
    let categoryName = inputName.value;

    // Kiểm tra nếu tên danh mục đã được nhập
    if (categoryName.trim() !== '') {
        let idCategory;

        // Xác định giá trị idCategory dựa trên loại danh mục
        if (categoryName.toLowerCase() === "trái cây") {
            idCategory = 1;
        } else if (categoryName.toLowerCase() === "lẵng quả") {
            idCategory = 2;
        } else {
            // Nếu loại danh mục không khớp với các giá trị trên, xử lý theo cách bạn muốn
            // Ví dụ: Gán giá trị mặc định cho idCategory
            idCategory = 0;
        }

        // Tạo một đối tượng danh mục mới
        let category = {
            stt: 0, // Giá trị của trường stt có thể thay đổi tùy theo yêu cầu của bạn
            id: Math.floor(Math.random() * 10000000),
            name: categoryName,
            idCategory: idCategory,
             
        };

        // Thêm đối tượng danh mục vào danh sách
        categoryList.push(category);

        // Gán giá trị stt cho từng đối tượng danh mục trong danh sách
        categoryList.forEach((category, index) => {
            category.stt = index + 1;
        });

        // Lưu danh sách mới vào localStorage
        localStorage.setItem("category", JSON.stringify(categoryList));

        // Thông báo thành công
        alert("Danh mục đã được lưu lại!");

        // Reset giá trị trường input
        inputName.value = '';
    } else {
        // Hiển thị thông báo lỗi nếu tên danh mục không được nhập
        alert("Vui lòng nhập tên danh mục !");
    }
});
function loadCategoryTable() {
    let categoryList = JSON.parse(localStorage.getItem("category")) || [];

    let tableBody = document.querySelector("#categoryTable tbody");
    tableBody.innerHTML = ""; // Xóa nội dung hiện tại của tbody

    categoryList.forEach(function(category) {
        let row = document.createElement("tr");

        let sttCell = document.createElement("td");
        sttCell.textContent = category.stt;
        row.appendChild(sttCell);

        let nameCell = document.createElement("td");
        nameCell.textContent = category.name;
        row.appendChild(nameCell);

        let idCell = document.createElement("td");
        idCell.textContent = category.idCategory;
        row.appendChild(idCell);

        tableBody.appendChild(row);
    });
}