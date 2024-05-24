---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "mixtet"
    text: "前端开发程序员"
    tagline: /前端开发/nodejs
    image:
        src: /avatar.png
        alt: avatar
    actions:
        - theme: brand
          text: Markdown Examples
          link: /markdown-examples
        - theme: alt
          text: API Examples
          link: /api-examples

features:
    - title: Feature A
      details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    - title: Feature B
      details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    - title: Feature C
      details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<!-- 自定义组件 -->
<script setup>
import home from "./components/home.vue"

</script>

<home />
