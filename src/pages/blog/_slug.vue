<template>
  <div>
    <div v-if="articles && articles instanceof Array">
      <BlogList :articles="articles"></BlogList>
    </div>

    <div v-else-if="articles && !(articles instanceof Array)">
      <BlogPost :article="articles"></BlogPost>
    </div>
  </div>
</template>

<script>
import BlogList from '../../components/BlogList.vue';
import BlogPost from '../../components/BlogPost.vue';

export default {
  async asyncData({ $content, params, error }) {
    const { slug } = params;

    const articles = await $content('blog', slug)
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' });
      });

    return {
      articles
    };
  },

  components: {
    BlogList,
    BlogPost
  }
};
</script>
