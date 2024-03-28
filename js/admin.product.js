function showForm() {
  var formAdd = document.querySelector(".formAdd");
  var overlay = document.querySelector(".overlay");
  var blurEffect = document.createElement("div");
  blurEffect.classList.add("blur-effect");
  document.body.appendChild(blurEffect);
  formAdd.classList.add("show");
  overlay.style.display = "block";
}

function closeForm() {
  var formAdd = document.querySelector(".formAdd");
  var overlay = document.querySelector(".overlay");
  var blurEffect = document.querySelector(".blur-effect");
  document.body.removeChild(blurEffect);
  formAdd.classList.remove("show");
  overlay.style.display = "none";
}
function renderProduct() {
  const produtcs = JSON.parse(localStorage.getItem("products")) || [];
  let htmlString = "";
  for (let i = 0; i < produtcs.length; i++) {
    htmlString += `
          <tr>
              <td>${i + 1}</td>
              <td>${produtcs[i].name}</td>
              <td><img src=${produtcs[i].image} alt="img" width="190px"/></td>
              <td>${produtcs[i].price} ₫</td>
              <td>${produtcs[i].stock}</td>
              <td>${produtcs[i].active ? "Bán" : "Đã bán"}</td>
              <td>
                    <span id="back" class="material-symbols-outlined" onclick="backProduct(${produtcs[i].id})"> cloud_sync </span>
                    <span id="delete" class="material-symbols-outlined" onclick="deleteProduct(${
                      produtcs[i].id
                    })"> delete </span>
              </td>
          </tr>
          `;
  }
  document.getElementById("tbody").innerHTML = htmlString;
}
renderProduct();

function deleteProduct(id) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  let index = -1;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    return;
  } else {
    products[index].active = false;
    localStorage.setItem("products", JSON.stringify(products));
    renderProduct();
  }
}

function backProduct(id) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  let index = -1;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    return;
  } else {
    products[index].active = true;
    localStorage.setItem("products", JSON.stringify(products));
    renderProduct();
  }
}
