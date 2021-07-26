<template>
  <div id="app">
    <div class="text-center mt-5">
      <router-link to="/episodes">
      <Button :size="'small'" :label="'Episódios'" :primary="false"></Button>
      </router-link>
      <router-link to="/characters">
      <Button :size="'small'" :label="'Personagens'" :primary="false"></Button>
      </router-link>
    </div>
    <router-view class="fade-in"></router-view>
  </div>
</template>

<script>
import Button from "./components/Button/Button.vue";

export default {
  name: "App",
  components: {
    Button
  },
};
</script>

<style>
#app {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.storybook-button {
  margin-right: 10px;
}
</style>
