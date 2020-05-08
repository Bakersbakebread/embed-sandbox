<template>
  <div id="app" class="site">
    <CloudsBackground />
    <!-- <TopNavBar /> -->
    <main class="site-content container">
      <vue-page-transition name="zoom">
        <router-view />
      </vue-page-transition>
    </main>
    <Footer />
  </div>
</template>

<script>
// import TopNavBar from "@/components/Layout/TopNavBar";
import Footer from "@/components/Layout/Footer";
import CloudsBackground from "@/components/Layout/CloudsBackground";

export default {
  name: "App",
  components: {
    // TopNavBar,
    Footer,
    CloudsBackground
  }
};
</script>
<style lang="scss">
@import "~bulma/sass/utilities/_all";

// import our overrides
@import "@/assets/styles/bulma-overrides.scss";



// cloud background
@import "@/assets/styles/cloud-background.scss";

// transitions
@import "@/assets/styles/page-transitions.scss";

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

//discord-embed
@import "@/assets/styles/discord-embed.scss";


@font-face {
  font-family: "Uni Sans Heavy CAPS";
  src: url("assets/fonts/Uni-Sans-Heavy.otf");
}
@font-face {
  font-family: "Discord-Font";
  src: url("assets/fonts/Whitney-Medium.ttf")
}
html, body{
  font-family: "Discord-Font";
}
h1 {
  font-family: "Uni Sans Heavy CAPS";
  font-size: 4rem;
  text-shadow: 0 8px 5px rgba(0, 0, 0, 0.4);
}
</style>