<template>
  <div id="movie-container">
    <movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import Movie from "./Movie";

export default {
  data() {
    return {
      movies: [],
    };
  },
  components: {
    Movie,
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
#movie-container {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  justify-content: center;
}
</style>
