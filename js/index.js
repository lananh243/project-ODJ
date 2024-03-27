// let productData = [
//   {
//     id: 1,
//     name: "Xoài Cát Hòa Lộc",
//     price: "326.000",
//     sold: "12,4k",
//     image:
//       "https://thuyanhfruits.com/wp-content/uploads/2020/10/120949477_1432966360234939_4789803050789831247_n.jpg",
//     stock: "1,3k",
//   },
//   {
//     id: 2,
//     name: "Kiwi vàng",
//     price: "155.000₫",
//     sold: "1,5k",
//     image:
//       "https://thuyanhfruits.com/wp-content/uploads/2020/11/122637738_1448950891969819_1317449283296797618_o.jpg",
//     stock: "2,0k",
//   },

//   {
//     id: 3,
//     name: "Nho sữa Hàn",
//     price: "280.000",
//     sold: "8,2k",
//     image:
//       "https://quangon.vn/resources/2021/01/22/nho-xanh-sua-han-quoc-10.jpg",
//     stock: "3,6k",
//   },
//   {
//     id: 4,
//     name: "Roi đỏ An Phước",
//     price: "230.000",
//     sold: "5,3k",
//     image:
//       "https://thuyanhfruits.com/wp-content/uploads/2020/11/roi-do-1-768x768.jpg",
//     stock: "890",
//   },
//   {
//     id: 5,
//     name: "Cherry đỏ Úc",
//     price: "500.000",
//     sold: "12,2k",
//     image:
//       "https://thuyanhfruits.com/wp-content/uploads/2020/11/80113048_1180556735475904_3787615681340506112_o.jpg",
//     stock: "7,9k",
//   },
//   {
//     id: 6,
//     name: "Mẫu Hộp Quà 21",
//     price: "650.000",
//     sold: "2,1k",
//     image: "https://thuyanhfruits.com/wp-content/uploads/2023/09/Hop-qua-1.png",
//     stock: "200",
//   },
//   {
//     id: 7,
//     name: "Đĩa quả bổ sẵn kiểu 17",
//     price: "120.000",
//     sold: "3,6k",
//     image:
//       "https://thuyanhfruits.com/wp-content/uploads/2020/11/online-768x768.png",
//     stock: "3,4k",
//   },
//   {
//     id: 8,
//     name: "Đĩa quả bổ sẵn kiểu 15",
//     price: "190.000",
//     sold: "1,9k",
//     image:
//       "https://thuyanhfruits.com/wp-content/uploads/2020/11/dia-qua-bo-san-14-768x768.png",
//     stock: "460",
//   },
//   {
//     id: 9,
//     name: "Táo Xanh Granny Smith Mỹ",
//     price: "155.000₫",
//     sold: "12,2k",
//     image: "https://vinfruits.com/wp-content/uploads/2017/02/5-11.png",
//     stock: "330",
//   },
//   {
//     id: 10,
//     name: "Nho Đen Mỹ",
//     price: "300.000",
//     sold: "2,4k",
//     image:
//       "https://vinfruits.com/wp-content/uploads/2016/12/176334586_2780710228925832_1031098562861576247_n.jpg",
//     stock: "6,3k",
//   },
//   {
//     id: 11,
//     name: "Lựu Israel",
//     price: "340.000",
//     sold: "28,2k",
//     image: "https://vinfruits.com/wp-content/uploads/2023/01/1.png",
//     stock: "1,6k",
//   },
//   {
//     id: 12,
//     name: "Táo Vàng Kinsei Nhật",
//     price: "230.000",
//     sold: "3,3k",
//     image: "https://vinfruits.com/wp-content/uploads/2022/12/3.jpg",
//     stock: "780",
//   },
//   {
//     id: 13,
//     name: "Lẵng Quả 89",
//     price: "300.000",
//     sold: "7,2k",
//     image: "https://ngocchaufruits.com/upload/images/gio-hoa-qua-121.jpg",
//     stock: "1,2k",
//   },
//   {
//     id: 14,
//     name: "Lẵng Quả 453",
//     price: "230.000",
//     sold: "8,3k",
//     image:
//       "https://anhchaufruits.vn/wp-content/uploads/2022/11/AC143.1850K.jpg",
//     stock: "278",
//   },
//   {
//     id: 15,
//     name: "Lẵng Quả 67",
//     price: "510.000",
//     sold: "3,2k",
//     image:
//       "https://hoatuoi360.vn/uploads/file/gio-trai-cay-xu-huong-tang-qua-duoc-ua-chuong-hoatuoi360.jpg",
//     stock: "1,2k",
//   },
//   {
//     id: 16,
//     name: "Lẵng Quả 85",
//     price: "1.990.000",
//     sold: "3,1k",
//     image: "https://gioquatetyen.com/wp-content/uploads/2023/03/6.png",
//     stock: "1,9k",
//   },
// ];

// localStorage.setItem("products", JSON.stringify(productData));

// lấy dữ liệu về đi render
let products = JSON.parse(localStorage.getItem("products"));
// console.log("111111", products);
//  function render product
function renderProduct() {
  let element = "";
  for (let i = 0; i < products.length; i++) {
    element += `
                    <div class="card" onclick="detail" id="">
                      <div class="image" onclick="redirectToProductPage(${products[i].id})">
                        <img src="${products[i].image}" class="card-img-top" alt="...">
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">${products[i].name}</h5>
                        <p class="card-text">${products[i].price}</p>
                        <div class="united">
                          <p>${products[i].sold}</p> 
                          <i>${products[i].stock}</i>
                        </div>
                        <p><button onclick="addToCart(${products[i].id})" class="btn btn-primary">Thêm vào giỏ hàng</button></p>
                      </div>
                    </div>
                `;
  }

  // console.log("1111111111",element);
  document.getElementById("products").innerHTML = element;
}
renderProduct();
// function đi mua hàng
function addToCart(productId) {
  // console.log("đã gọi hàm");
  /* 
        khi nào cho user đi mua hàng
        khi đăng nhập thì mới cho mua
     */
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let users = JSON.parse(localStorage.getItem("users"));

  if (checkLogin == null) {
    console.log("bạn phải đăng nhập để đi mua hàng");
    return; // gặp return dừng chương trình luôn
  }
  // kết hợp status user la true
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === checkLogin) {
      console.log(8888, users[i].status);
      if (users[i].status === false) {
        console.log("tài khoản bị khóa");
        return;
      }
      // Kết thúc vòng lặp sau khi tìm thấy user
    }
  }
  console.log("đi mua hàng bình thường");
  /* 
        lấy giỏ hàng của user để đi mua hàng
        và lấy giỏ hàng user dựa vào id của user
     */

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      //lấy thông tin sản phẩm để đưa vào giỏ hàng
      // làm sao để lấy thông tin sản phẩm
      // console.log("11111", productId);
      // có id sản phẩm rồi làm sao lấy thông tin sản phẩm
      let product = JSON.parse(localStorage.getItem("products"));
      for (let j = 0; j < product.length; j++) {
        if (productId == product[j].id) {
          // lấy thông tin sản phẩm
          console.log("1111", product[j]);
          console.log("giỏ hàng của user sẽ là ", users[i].cart);
          // let a={...product[j],quantity:1}
          /* 
                        trước khi thêm vào phải xem trong giỏ hàng có sản phẩm đó chưa
                        có rồi thì tăng số lượng còn chưa có thì thêm vào bt
                    */
          // kiểm tra xem trong giỏ hàng có tồn tại sản phẩm đó chưa
          // duyệt giỏ hàng
          let index = users[i].cart.findIndex((item, index) => {
            return item.id == productId;
          });
          if (index == -1) {
            //tức là không có thêm bình thường
            console.log("chưa có ");
            users[i].cart.push({ ...product[j], quantity: 1 });
            localStorage.setItem("users", JSON.stringify(users));
            showQuantityCart();
          } else {
            //có rồi đi tăng số lượng
            // mình phải biết vị trí của cái cần tăng
            users[i].cart[index].quantity = ++users[i].cart[index].quantity;
            localStorage.setItem("users", JSON.stringify(users));
          }
          // for (let index = 0; index < users[i].cart.length; index++) {
          //         if(users.cart[index].id==productId){
          //         }
          // }
          // sau khi push xong thì lưu trên local
        }
      }
    }
  }
}
// function hiển thị số lượng sản phẩm
function showQuantityCart() {
  // lấy giỏ hàng ra.length là được
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      // console.log(users[i].cart);
      document.getElementsByClassName("hdRed")[0].innerHTML =
        users[i].cart.length;
    }
  }
}
showQuantityCart();
function detail() {
  for (let i = 0; i < products.length; i++) {}
}

//
function redirectToProductPage(id) {
  const product_select = products.find((p) => p.id == id);
  localStorage.setItem("product_select", JSON.stringify(product_select));
  window.location.href = "./pages/detail.html";
}

function logined() {
  const user = document.getElementById("user");
  const logined = document.getElementById("logined");
  const userName = document.getElementById("userName");
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  for (let i = 0; i < users.length; i++) {
    logined.style.display = "none";
    user.style.display = "flex";
    if (checkLogin === users[i].id) {
      logined.style.display = "flex";
      user.style.display = "none";
      userName.innerHTML = `${users[i].userName}`;
      break;
    }
  }
}
logined();
