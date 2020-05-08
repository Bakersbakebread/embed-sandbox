<template>
  <div class="container">
    <TopPageHero />
    <div class="columns">
      <div class="column">
        <MainForm :open="collapseIdOpen == 'basicSettings'" @clicked="childCollapseClicked" />
        <FooterSettings :open="collapseIdOpen == 'footerSettings'" @clicked="childCollapseClicked"/>
        <AuthorSettings :open="collapseIdOpen == 'authorSettings'" @clicked="childCollapseClicked" />
        <FieldSettings :open="collapseIdOpen == 'fieldSettings'" @clicked="childCollapseClicked" />
      </div>
      <div class="column">
        <DiscordEmbed />
        <!-- <CodePreview /> -->
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
import FieldSettings from "@/components/Home/FieldSettings";
import FooterSettings from "@/components/Home/FooterSettings";
// import CodePreview from "@/components/Home/CodePreview";

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
    AuthorSettings,
    FieldSettings,
    FooterSettings
    // CodePreview
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