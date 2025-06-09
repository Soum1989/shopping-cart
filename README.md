# 🛒 Bazaar - Shopping Cart Application

A fully responsive React-based shopping cart app that allows users to browse products, add items to cart, and simulate a checkout experience. Built using modern UI practices with Material UI and deployed using Netlify.

## 🚀 Live Demo

👉 [https://bazaar-market-place.netlify.app](https://bazaar-market-place.netlify.app)

## 🧰 Tech Stack

- ⚛️ React
- 🧩 React Router
- 🎨 Material UI (MUI)
- 🔗 Axios
- 🛍️ [FakeStoreAPI](https://fakestoreapi.com/)
- ☁️ Netlify (Deployment)


## ✅ Features

- Responsive product listing
- Product detail page
- Add/remove items from cart
- Quantity increase/decrease
- Order total calculation
- Local storage persistence

## 🛠️ Run Locally

```bash
git clone https://github.com/Soum1989/shopping-cart.git
cd shopping-cart
npm install
npm run dev



src/
│
├── components/
│   ├── Banner/
│   ├── CartItem/
│   ├── Layout/
│   ├── Navbar/
│   ├── Product/
│   ├── ProductList/
│   └── SearchBar/
│
├── pages/
│   ├── AllProducts.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── ShowProduct.jsx
│
├── store/
│   └── cart-context.jsx

App.jsx
main.jsx

