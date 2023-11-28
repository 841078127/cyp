<template>
  <BlogHeader/>
  <ArticleList/>
  <BlogFooter/>
</template>

<script>
  import BlogHeader from "@/components/BlogHeader.vue";
  import ArticleList from "@/components/ArticleList.vue";
  import BlogFooter from "@/components/BlogFooter.vue";

  export default {
    name: 'Home',
    components: {BlogFooter, ArticleList, BlogHeader}
  }
</script>

<style>
  #app{
    font-family: Georgia,Arial,sans-serif;
    margin-left: 40px;
    margin-right: 40px;
  }

</style>