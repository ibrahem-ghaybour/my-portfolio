<template>
    <header class=" fixed  bg-[red] max-w-20 top-0 left-0 right-0 ">
        <div class=" inline-flex justify-center flex-col ">
            <Button v-for="button in buttons" :key="button.name" :to="button.link">{{ button.name }}</Button>
        </div>
    </header>
    <slot></slot>
    <footer>
        <div></div>
    </footer>
</template>
<script setup lang="ts">
import { Button } from "@/components/ui/button"
const buttons = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
]


</script>