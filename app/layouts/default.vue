<template>
    <div class="">
        <header class="inline-flex flex-col justify-center p-2">
            <div class="inline-flex fixed top-0 start-2 h-dvh gap-2 justify-center flex-col">
                <Button
                    class="rounded-full cursor-pointer bg-[#27282998] group flex !items-center justify-start w-14 h-14 hover:w-auto transition-all duration-300  overflow-hidden "
                    v-for="button in buttons" :key="button.name">
                    <a class="w-full flex" :href="button?.link">
                        <span class="">
                            <component :is="button.icon" class="!w-6 !h-6 " />
                        </span>
                        <span
                            class="max-w-0 opacity-0 ml-0 text-lg capitalize whitespace-nowrap transition-all duration-300  group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2">{{
                                button.name }}</span>
                    </a>
                </Button>
            </div>
        </header>
        <slot></slot>
        <footer class="inline-flex flex-col justify-center p-2 h-dvh  bottom-0 start-0">
            <div></div>
        </footer>
    </div>
</template>
<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { House, User, FileUser, FileImage, Braces, Mail } from "lucide-vue-next";
const buttons = [
    {
        name: 'Home',
        link: '#home',
        icon: House
    },
    {
        name: 'About',
        link: '#about',
        icon: User
    },
    {
        name: 'Contact',
        link: '#contact',
        icon: Mail
    },
    {
        name: 'Projects',
        link: '#projects',
        icon: Braces
    },
    {
        name: 'Skills',
        link: '#skills',
        icon: FileImage
    },
    {
        name: 'Resume',
        link: '#resume',
        icon: FileUser
    }
]


</script>