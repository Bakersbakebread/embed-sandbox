<template>
  <div id="app" class="site">
    <div id="background-wrap">
      <div class="x1">
        <div class="cloud"></div>
      </div>

      <div class="x2">
        <div class="cloud"></div>
      </div>

      <div class="x3">
        <div class="cloud"></div>
      </div>

      <div class="x4">
        <div class="cloud"></div>
      </div>

      <div class="x5">
        <div class="cloud"></div>
      </div>
    </div>
    <!-- <TopNavBar /> -->
    <main class="site-content container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
// import TopNavBar from "@/components/Layout/TopNavBar";
import Footer from "@/components/Layout/Footer";

export default {
  name: "App",
  components: {
    // TopNavBar,
    Footer
  }
};
</script>
<style lang="scss">
@import "~bulma/sass/utilities/_all";

// import our overrides
@import "@/assets/styles/bulma-overrides.scss";

//discord-embed
@import "@/assets/styles/discord-embed.scss";

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

@font-face {
  font-family: "Uni Sans Heavy CAPS";
  src: url("assets/fonts/Uni-Sans-Heavy.otf");
}
h1{
  font-family: "Uni Sans Heavy CAPS";
  font-size:4rem;
    text-shadow: 0 8px 5px rgba(0, 0, 0, 0.4);
}
#background-wrap {
  bottom: 0;
  left: 0;
  padding-top: 50px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
}
/* KEYFRAMES */

@-webkit-keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
}

@-moz-keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
}

@keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
}

/* ANIMATIONS */

.x1 {
	-webkit-animation: animateCloud 35s linear infinite;
	-moz-animation: animateCloud 35s linear infinite;
	animation: animateCloud 35s linear infinite;
	
	-webkit-transform: scale(0.65);
	-moz-transform: scale(0.65);
	transform: scale(0.65);
}

.x2 {
	-webkit-animation: animateCloud 20s linear infinite;
	-moz-animation: animateCloud 20s linear infinite;
	animation: animateCloud 20s linear infinite;
	
	-webkit-transform: scale(0.3);
	-moz-transform: scale(0.3);
	transform: scale(0.3);
}

.x3 {
	-webkit-animation: animateCloud 30s linear infinite;
	-moz-animation: animateCloud 30s linear infinite;
	animation: animateCloud 30s linear infinite;
	
	-webkit-transform: scale(0.5);
	-moz-transform: scale(0.5);
	transform: scale(0.5);
}

.x4 {
	-webkit-animation: animateCloud 18s linear infinite;
	-moz-animation: animateCloud 18s linear infinite;
	animation: animateCloud 18s linear infinite;
	
	-webkit-transform: scale(0.4);
	-moz-transform: scale(0.4);
	transform: scale(0.4);
}

.x5 {
	-webkit-animation: animateCloud 25s linear infinite;
	-moz-animation: animateCloud 25s linear infinite;
	animation: animateCloud 25s linear infinite;
	
	-webkit-transform: scale(0.55);
	-moz-transform: scale(0.55);
	transform: scale(0.55);
}

/* OBJECTS */

.cloud {
	background: #fff;
	border-radius: 100px;
	
	box-shadow: 0 8px 5px rgba(0, 0, 0, 0.3);

	height: 120px;
	position: relative;
	width: 350px;
}

.cloud:after, .cloud:before {
  background: #fff;
	content: '';
	position: absolute;
	z-indeX: -1;
}

.cloud:after {
	border-radius: 100px;

	height: 100px;
	left: 50px;
	top: -50px;
	width: 100px;
}

.cloud:before {
	border-radius: 200px;

	width: 180px;
	height: 180px;
	right: 50px;
	top: -90px;
}
</style>