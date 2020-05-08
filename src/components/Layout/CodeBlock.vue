<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">{{language}}</p>
      <a class="card-header-icon buttons">
        <b-button
          tag="router-link"
          icon-left="content-copy"
          to="/code"
          type="is-dark"
          v-clipboard:copy="sourceCode"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >Copy All</b-button>
        <b-button
          icon-left="link-variant"
          @click="soon()"
          type="is-dark"
        >Send to paste</b-button>
      </a>
    </div>
    <div class="card-content">
      <pre v-highlightjs><code :class="language">{{sourceCode}}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeBlock",
  props: ["sourceCode", "language"],
  methods: {
    onCopy() {
      this.$buefy.notification.open({
        message: `Copied to clipboard 👍🏼`,
        position: "is-top",
        type: "is-success"
      });
    },
    onError: function(e) {
      alert("Failed to copy texts" + e);
    },
    soon() {
      this.$buefy.notification.open({
        message: `Soon...™`,
        position: "is-top",
        type: "is-primary"
      });
    }
  }
};
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: flex-end;
}
.card {
  margin-bottom: 2rem;
}
</style>