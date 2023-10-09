<script setup>
import {ref, onBeforeMount} from 'vue'
import { createVuetify } from 'vuetify/lib/framework.mjs';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import axios from 'axios'
import {useRoute} from 'vue-router'


createVuetify({
    components : {
        VSkeletonLoader,
    }
});

const router = useRoute();

const loading = ref(true);
const product = ref(null);

const id = `${router.params.id}`;

function showProduct(){
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res => product.value = res.data)
    .then(res => loading.value = false)
}


onBeforeMount(()=>{
    showProduct()
});

</script>

<template>
    <v-card class="ma-5">
        <v-card-title>Products Details</v-card-title>
        <v-card-item>
            <v-row>
                <v-col cols="4">
                    <v-skeleton-loader
                    elevation="2"
                    boilerplate
                    class="border"
                    type="image,list-item-three-line"
                    width="600"
                    height="650"
                    v-if="loading"
                    >
                    </v-skeleton-loader>

                    <div v-else>
                       
                        <v-card
                            class="mb-5"
                            width="600"
                        >
                            <v-img
                            class="align-end text-white"
                            height="400"
                            :src="product.thumbnail"
                            cover
                            >
                            <v-card-title class="ml-4">{{ product.title }}</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4 pl-4">
                            Price : ${{ product.price }}
                            </v-card-subtitle>

                            <v-card-subtitle class="pt-4 pl-4">
                            Brand : {{ product.brand }}
                            </v-card-subtitle>

                            <v-card-subtitle class="pt-4 pl-4">
                            Category : {{ product.category }}
                            </v-card-subtitle>

                            <v-card-text>
                               Description : {{ product.description }}
                            </v-card-text>

                            <v-card-actions>
                            
                            </v-card-actions>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>

<style scoped>

</style>