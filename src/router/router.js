import { createRouter, createWebHistory } from "vue-router";
const Dashboard = () => import("../components/Dashboard.vue");
const Products = () => import("../components/Products.vue");
const Product = () => import("../components/Product.vue");


const routes = [
    {
        path : '/',
        name : 'dashboard',
        component : Dashboard
    },
    {
        path : '/products',
        name : 'products',
        component : Products
    },
    {
        path : '/product/:id',
        name : 'product',
        component : Product
    },
]


const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;