<script setup>
    import {ref} from 'vue'
    import Header from './Header.vue';
    import Navigation from './Navigation.vue'

</script>

<template>
    <v-app>
        
        <Header/>
       
        <Navigation/>
        
        <v-main>
            <slot></slot>
        </v-main>
    </v-app>
</template>

<style scoped>

</style>