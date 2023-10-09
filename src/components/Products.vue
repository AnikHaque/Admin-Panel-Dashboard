<script setup>
import {ref, onBeforeMount, computed} from 'vue'
import { createVuetify } from 'vuetify/lib/framework.mjs';
import { VDataTableVirtual } from 'vuetify/labs/VDataTable';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import axios from 'axios'

createVuetify({
    components : {
        VSkeletonLoader,
        VDataTableVirtual
    }
});

const loading = ref(true);
const products = ref([]);

const headers = [
    { title: 'Title', align: 'start',key: 'title',},
    { title: 'Brand', align: 'start', key: 'brand' },
    { title: 'Category', align: 'start', key: 'category'},
    { title: 'Stock', align: 'start', key: 'stock' },
    { title: 'Price', align: 'start', key: 'price' },
    { title: 'Rating', align: 'start', key: 'rating' },
    { title: 'Actions', align: 'start', value: 'customButton', sortable: false },
]



function getProducts(){
    axios.get(`https://dummyjson.com/products`)
    .then(res => products.value = res.data.products)
    .then(res => loading.value = false)
}

const product = ref(null)
function showProduct(id){
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res => product.value = res.data.product)
    .then(res => loading.value = false)
}


onBeforeMount(()=>{
    getProducts()
});

</script>

<template>
    <v-card class="ma-5">
        <v-card-title>Products List</v-card-title>
        <v-card-item>
            <v-row>
                <v-col>
                    <v-skeleton-loader
                    class="mx-auto border"
                    type="table-thead, table-tbody, table-row-divider"
                    v-if="loading"
                    >
                    </v-skeleton-loader>

                    <div v-else>
                    <v-data-table-virtual
                    :headers="headers"
                    :items="products"
                    class="elevation-1"
                    height="auto"
                    item-value="title"
                    >
                    <template v-slot:item.customButton="{ item }">
                        <v-btn :to="{name:'product', params:{id:item.id}}" density="comfortable" prepend-icon="mdi-eye-circle" class="bg-indigo" rounded>Details</v-btn>
                    </template>
                    </v-data-table-virtual>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>

<style scoped>

</style>