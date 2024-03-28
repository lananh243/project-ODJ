function showForm() {
  var formAdd = document.querySelector(".formAdd");
  var overlay = document.getElementById("overlay");

  var blurEffect = document.createElement("div");
  blurEffect.classList.add("blur-effect");
  document.body.appendChild(blurEffect);
  formAdd.classList.add("show");
  overlay.style.display = "block";
}

function closeForm() {
  var formAdd = document.querySelector(".formAdd");
  var overlay = document.getElementById("overlay");
  var blurEffect = document.querySelector(".blur-effect");
  document.body.removeChild(blurEffect);
  formAdd.classList.remove("show");
  overlay.style.display = "none";
}
// Lấy trạng thái hiện tại của danh sách từ localStorage
let categoryList = JSON.parse(localStorage.getItem("category")) || [];

// Lấy thẻ input và nút lưu lại từ HTML
let inputName = document.querySelector(".inp");
let saveButton = document.querySelector(".butn");

// Xử lý sự kiện khi nhấp vào nút "Lưu lại"
saveButton.addEventListener("click", function () {
  // Lấy giá trị từ trường input
  let categoryName = inputName.value;

  // Kiểm tra nếu tên danh mục đã được nhập
  if (categoryName.trim() !== "") {
    // Tạo một đối tượng danh mục mới
    let category = {
      categoryId: Math.floor(Math.random() * 10000000),
      name: categoryName,
    };

    // Thêm đối tượng danh mục vào danh sách
    categoryList.push(category);

    // Lưu danh sách mới vào localStorage
    localStorage.setItem("category", JSON.stringify(categoryList));

    // Thông báo thành công
    // alert("Danh mục đã được lưu lại!");
    // Reset giá trị trường input
    inputName.value = "";

    closeForm();
    renderCategory();
  } else {
    // Hiển thị thông báo lỗi nếu tên danh mục không được nhập
    alert("Vui lòng nhập tên danh mục!");
  }
});
// fucntion render danh mục sản phẩm
function renderCategory() {
  const category = JSON.parse(localStorage.getItem("category")) || [];
  let html = "";
  for (let i = 0; i < category.length; i++) {
    html += `
        <tr>
              <td>${i + 1}</td>
              <td>${category[i].categoryId}</td>
              <td>${category[i].name}</td>
              <td>
                <button onclick="updateCategory(${
                  category[i].categoryId
                })">Sửa</button>
                <button onclick="deleteCategory(${
                  category[i].categoryId
                })" >Xóa</button>
              </td>
          </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = html;
}
renderCategory();

function deleteCategory(id) {
  // lay category local ve
  const category = JSON.parse(localStorage.getItem("category")) || [];
  // dua vao id de tii vi tri can xoa: index
  let index = -1;
  for (let i = 0; i < category.length; i++) {
    if (category[i].categoryId == id) {
      index = i;
    }
  }

  if (index == -1) {
    return;
  } else {
    // category.splice(index, 1)
    category.splice(index, 1);
    // local.set.....
    localStorage.setItem("category", JSON.stringify(category));
    // render.....
    renderCategory();
  }
}

function updateCategory(id) {
  const category = JSON.parse(localStorage.getItem("category")) || [];
  // dua vao id de tim vi tri can xoa: index
  let index = -1;
  for (let i = 0; i < category.length; i++) {
    if (category[i].categoryId == id) {
      index = i;
    }
  }

  const result = prompt(`${category[index].name}`);
  if (!result) {
    return;
  }

  category[index].name = result;
  // local.set.....
  localStorage.setItem("category", JSON.stringify(category));
  // render.....
  renderCategory();
}
