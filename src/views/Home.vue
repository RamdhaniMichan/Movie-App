<template>
  <div class="home">
    <navbar />

    <div id="main-section">
      <sidebar />
      <movielist />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Movielist from "../components/Movielist.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Sidebar,
    Movielist,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;

  #main-section {
    display: flex;
    margin-top: 50px;
  }
}
</style>
