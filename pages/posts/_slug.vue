<template>
  <div class="container">
    <article>
      <h1 class="title">{{post.title}}</h1>
      <p>{{post.content}}</p>
    </article>
    <aside>
      <h3>
        <h3>Jokes you might enjoy</h3>
        <ul>
          <li :key="related.slug" v-for="related in relatedPosts">
            <nuxt-link :to="{name: 'posts-slug', params: {slug: related.slug}}">{{related.title}}</nuxt-link>
          </li>
        </ul>
      </h3>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  head() {
    return {
      title: 'Post page',
      meta: [
        {
          hid: this.post.id,
          name: this.post.title,
          content: this.post.content
        }
      ]
    }
  },
  computed: {
    post() {
      return this.$store.state.posts.all.find(post => post.slug === this.slug);
    },
    relatedPosts() {
      return this.$store.state.posts.all.filter(post => post.slug !== this.slug);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
</style>
