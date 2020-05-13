<template>
  <section>
    <b-sidebar
      type="is-primary"
      :fullheight="true"
      :fullwidth="false"
      :overlay="true"
      :right="true"
      :open.sync="sidebarState"
    >
      <div class="wrapper">
        <header>Webhook settings</header>
        <b-button
          class="close-icon is-hidden-touch"
          size="is-medium"
          type="is-light is-outlined"
          icon-left="close"
          @click="toggleSidebar()"
        ></b-button>
        <b-button
          class="close-icon is-hidden-desktop"
          type="is-light is-outlined"
          icon-left="close"
          @click="toggleSidebar()"
        >Close webhook settings</b-button>

        <div class="content"><WebhookForm/></div>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
import WebhookForm from "@/components/Form/WebhookForm";
export default {
  components: {
    WebhookForm
  },
  computed: {
    sidebarState: {
      get() {
        return this.$store.state.sidebar_open;
      },
      set() {
        this.$store.commit("toggleSidebar");
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    }
  }
};
</script>

<style lang="scss" scoped>
$blurple: #7289da;
$discord-bg-primary: #36393f;
$discord-bg-secondary: #2f3136;
$discord-bg-secondary-alt: #292b2f;

.wrapper {
  display: grid;
  grid-template-areas:
    "header header close"
    "content content content";
  padding: 2rem;
}
header {
  font-size: 3rem;
  grid-area: header;
  font-family: "Uni Sans Heavy CAPS";
}
.close-icon {
  grid-area: close;
  align-self: center;
}
.content {
  grid-area: content;
}

@media screen and (max-width: 600px) {
  .wrapper {
    height: 100%;
    padding: 1rem;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header"
      "content content"
      "close close";
  }
  header {
    font-size: 2rem;
    text-align: center;
  }
  .content {
  }
  .close-icon {
    grid-area: close;
    display: flex;
    justify-content: center;
  }
}
</style>