<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-light p-0 my-2">
        <nuxt-link to="/" class="navbar-brand font-weight-bold">Mitchell Cash</nuxt-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
      <hr class="mt-0" />
    </div>
  </header>
</template>
