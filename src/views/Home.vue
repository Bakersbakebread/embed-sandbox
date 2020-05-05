<template>
  <div class="container">
    <TopPageHero />
    <div class="columns">
      <div class="column">
        <MainForm :open="collapseIdOpen == 'basicSettings'" @clicked="childCollapseClicked" />
        <AuthorSettings :open="collapseIdOpen == 'authorSettings'" @clicked="childCollapseClicked" />
      </div>
      <div class="column">
        <DiscordEmbed />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopPageHero from "@/components/Home/TopPageHero.vue";
import DiscordEmbed from "@/components/Home/DiscordEmbed";
import MainForm from "@/components/Home/MainForm";
import AuthorSettings from "@/components/Home/AuthorSettings";

export default {
  name: "Home",
  data() {
    return {
      collapseIdOpen: ""
    };
  },
  components: {
    TopPageHero,
    MainForm,
    DiscordEmbed,
    AuthorSettings
  },
  methods: {
    childCollapseClicked(value) {
      console.log(value);
      this.collapseIdOpen = value;
    }
  }
};
</script>

<style>
</style>