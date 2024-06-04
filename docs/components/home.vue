<template>
    <div class="home">
        sss
        <!-- <img v-for="k in Object.keys(modules)" :key="k" :src="modules[k].default" /> -->
    </div>
</template>

<script setup>
// import { ref } from "vue";

// export default {
//     setup() {
//         const imageSrcs = ref([]);

//         // 导入images文件夹下的所有图片
//         const importAllImages = async () => {
//             const imageFiles = await import.meta.globEager("../public/image/123/*.jpg");
//             imageSrcs.value = Object.keys(imageFiles).map((path) => path.replace("./", ""));
//         };

//         setTimeout(() => {
//             importAllImages();
//         }, 1000);

//         return {
//             imageSrcs,
//         };
//     },
// };

// const modules = import.meta.globEager("./public/image/123/*.jpg");
// console.log(123);
</script>

<style scoped></style>
