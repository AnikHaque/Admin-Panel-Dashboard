<script setup>
    import {ref} from 'vue';
    const drawer = ref(true);
    const rail = ref(false);
</script>

<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail = "rail"
        permanent
        @click="rail = false"
        >

        <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Admin Name"
        nav
        class="ml-2"
        >
        <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
        </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item to="/" prepend-icon="mdi-view-dashboard" title="Dashboard" value="Dashboard"></v-list-item>
          <v-list-item to="/products" prepend-icon="mdi-table" title="Products" value="products"></v-list-item>
          <!-- <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item> -->
        </v-list>

    </v-navigation-drawer>
</template>

<style scoped>

</style>