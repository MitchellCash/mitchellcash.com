<template>
  <div class="row">
    <div class="col-lg-2"></div>
    <div class="col-xs-12 col-lg-8">
      <div class="row mb-3">
        <div class="col">
          <h1 class="display-4">Blog</h1>
          <small> Subscribe <a href="/rss.xml" class="rss">via RSS</a>. </small>
        </div>
      </div>

      <div v-for="(article, index) in articles" :key="index">
        <div class="row mb-3">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h6 class="card-subtitle text-muted mb-2">
                  <small>{{ formatFeedDate(article.createdAt) }}</small>
                </h6>
                <nuxt-link :to="article.path || '/'" class="feed-post-title">
                  <h5 class="card-title">{{ article.title }}</h5>
                </nuxt-link>
                <nuxt-link :to="article.path || '/'" class="feed-post-excerpt">
                  <p class="card-text text-muted">
                    {{ article.excerpt }}
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-2"></div>
  </div>
</template>

<script>
export default {
  props: ['articles'],

  methods: {
    formatFeedDate(date) {
      const formattedDate = new Date(date);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return formattedDate.toLocaleString('en-AU', options);
    }
  }
};
</script>

<style lang="scss">
.rss {
  color: inherit;
  text-decoration: underline;
}

.rss:hover {
  color: inherit;
}

.feed-post-title {
  color: inherit;
  text-decoration: none !important;
}

.feed-post-title:hover {
  color: inherit;
}

.feed-post-title h5 {
  font-weight: bold;
}

.feed-post-excerpt {
  text-decoration: none !important;
}
</style>
