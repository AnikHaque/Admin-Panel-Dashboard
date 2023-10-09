<script setup>

</script>

<template>
    <v-app-bar title="Assignment 1 (Module 12)" :elevation="1">
            <template v-slot:append>
                <v-menu transition="slide-y-reverse-transition" width="180">
                    <template v-slot:activator="{props}">
                        vue admin
                    </template>

                    <v-list>
                        <v-list-item>
                        <v-list-item-title>Click Me1</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                        <v-list-item-title>Click Me1</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                        <v-list-item-title>Click Me1</v-list-item-title>
                        </v-list-item>
                    </v-list>

                </v-menu>
            </template>
        </v-app-bar>
</template>

<style scoped>

</style>