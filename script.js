const products = [];
let id = 1;

function add(category, name, price, image) {
  const old = price + Math.floor(price * 0.15);

  products.push({
    id: id++,
    category,
    name,
    price,
    old,
    image
  });
}

/* ================= SMARTPHONES (15) ================= */

add("smartphone","iPhone 15 Pro",134900,"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800");
add("smartphone","Samsung Galaxy S24",119999,"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800");
add("smartphone","Google Pixel 8",89999,"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800");
add("smartphone","OnePlus 12",64999,"https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800");
add("smartphone","Nothing Phone 2",44999,"https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=800");
add("smartphone","Xiaomi 14 Pro",69999,"https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800");
add("smartphone","Realme GT 5",45999,"https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?w=800");
add("smartphone","Vivo X100",59999,"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800");
add("smartphone","Oppo Find X7",64999,"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800");
add("smartphone","Motorola Edge 40",34999,"https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800");
add("smartphone","Asus Zenfone 10",59999,"https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800");
add("smartphone","Redmi Note 13",32999,"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800");
add("smartphone","Samsung Galaxy A54",38999,"https://images.unsplash.com/photo-1573148195900-7845dcb9b127?w=800");
add("smartphone","Honor Magic 6",74999,"https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800");
add("smartphone","iQOO 12",52999,"https://i.gadgets360cdn.com/products/large/iqoo-12-legend-670x800-1702641041.jpg");
/* ================= LAPTOPS (15) ================= */

add("laptop","MacBook Air M3",124900,"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800");
add("laptop","Dell XPS 13",109999,"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800");
add("laptop","HP Spectre x360",114999,"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800");
add("laptop","Lenovo Legion 5",139999,"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800");
add("laptop","Asus ROG G14",149999,"https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=800");
add("laptop","Acer Predator",119999,"https://images.unsplash.com/photo-1518770660439-4636190af475?w=800");
add("laptop","MSI Stealth 14",159999,"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800");
add("laptop","Samsung Galaxy Book",99999,"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800");
add("laptop","LG Gram 16",129999,"https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800");
add("laptop","Surface Laptop 5",119999,"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800");
add("laptop","HP Omen 16",139999,"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800");
add("laptop","Asus Vivobook 16",79999,"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800");
add("laptop","Dell Inspiron 14",69999,"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800");
add("laptop","Acer Swift 3",74999,"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800");
add("laptop","ThinkPad X1",159999,"https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=800");

/* ================= HEADPHONES (10) ================= */

add("headphones","Sony WH-1000XM5",29990,"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800");
add("headphones","Bose QC Ultra",34999,"https://images.unsplash.com/photo-1545127398-14699f92334b?w=800");
add("headphones","Sennheiser Momentum 4",27999,"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800");
add("headphones","JBL 660NC",12999,"https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=800");
add("headphones","Skullcandy Crusher",14999,"https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=800");
add("headphones","Beats Studio 3",22999,"https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800");
add("headphones","Noise Air Buds",3499,"https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800");
add("headphones","Realme Buds Air",3999,"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800");

/* ================= RENDER ================= */

function renderProducts(list){
  const grid=document.getElementById("productGrid");
  if(!grid) return;

  grid.innerHTML="";
  list.forEach(p=>{
    const discount=Math.round(((p.old-p.price)/p.old)*100);
    grid.innerHTML+=`
      <div class="product-card">
        <a href="product.html?id=${p.id}">
          <img src="${p.image}">
        </a>
        <div>${p.name}</div>
        <div>
          <span class="price">₹ ${p.price.toLocaleString("en-IN")}</span>
          <span class="old">₹ ${p.old.toLocaleString("en-IN")}</span>
          <span class="discount">${discount}% OFF</span>
        </div>
      </div>`;
  });
}

/* ================= PAGE LOAD ================= */

function detectPage(){
  const path=window.location.pathname;
  if(path.includes("smartphones"))
    renderProducts(products.filter(p=>p.category==="smartphone"));
  else if(path.includes("laptops"))
    renderProducts(products.filter(p=>p.category==="laptop"));
  else if(path.includes("headphones"))
    renderProducts(products.filter(p=>p.category==="headphones"));
  else
    renderProducts(products);
}

document.addEventListener("DOMContentLoaded",detectPage);
