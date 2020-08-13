<template>
  <div class="row">
    <div class="col-lg-2"></div>
    <div class="col-xs-12 col-lg-8">
      <div class="row">
        <div class="col">
          <h1 class="display-4">Contact</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>Howdy, I'm Mitchell Cash and here is how to contact me:</p>
          <ul class="list-unstyled ml-0">
            <li>
              <i class="fas fa-envelope-square mr-2"></i>
              <a class="contact-link" href="mailto:mitchell@mitchellcash.com">
                mitchell@mitchellcash.com
              </a>
              <noscript>
                Email address protected from spambots; use a JavaScript-enabled browser to see it.
              </noscript>
            </li>
            <li>
              <i class="fab fa-github-square mr-2"></i>
              <a class="contact-link" href="https://github.com/mitchellcash "> GitHub </a>
            </li>
            <li>
              <i class="fab fa-hacker-news-square mr-2"></i>
              <a class="contact-link" href="https://news.ycombinator.com/user?id=MitchellCash">
                Hacker News
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact-link {
  color: inherit;
  text-decoration: underline;
}

.contact-link:hover {
  color: inherit;
}
</style>
