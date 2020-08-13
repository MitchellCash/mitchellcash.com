<template>
  <div class="row">
    <div class="col-lg-2"></div>
    <div class="col-xs-12 col-lg-8">
      <article class="post-content mb-5">
        <h1 class="font-weight-bold post-title">{{ article.title }}</h1>
        <p class="post-date">
          <small class="text-muted mb-4">
            {{ formatPostDate(article.createdAt) }} |
            <i class="far fa-clock"></i>
            <span>{{ article.readingTime }} min read</span>
          </small>
        </p>
        <nuxt-content :document="article" />
      </article>
    </div>
    <div class="col-lg-2"></div>
  </div>
</template>

<script>
export default {
  props: ['article'],

  methods: {
    formatPostDate(date) {
      const formattedDate = new Date(date);
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return formattedDate.toLocaleString('en-AU', options);
    }
  }
};
</script>

<style lang="scss">
.nuxt-content img {
  max-width: 100%;
  height: auto;
}

.nuxt-content pre {
  border-radius: 4px;
}

.post-title {
  color: #292e31;
}

.post-content {
  color: rgb(41, 41, 41);
  font-family: 'Lora', serif;
  font-size: 1.2rem;
}

.post-content h1 {
  font-family: 'Lora', serif;
  font-size: 2.4rem;
}

.post-content h2 {
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  margin-top: 3rem;
}

.post-content h3 {
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  margin-top: 3rem;
}

.post-content a {
  color: inherit;
  text-decoration: underline;
}

.post-date {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
}

blockquote {
  font-family: 'Open Sans', sans-serif;
  color: rgba(0, 0, 0, 0.6);
  padding-left: 2rem !important;
}

blockquote p {
  font-style: italic;
}
</style>
