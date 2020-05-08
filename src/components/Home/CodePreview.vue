<template>
  <div class="card" style="margin-top: 1rem">
    <div class="card-header">
      <p class="card-header-title">Code Preview</p>
    </div>
    <div class="card-content">
      <b-button tag="router-link" icon-left="json" to="/code" class="button is-dark">
        Json
      </b-button>
      <b-button tag="router-link" icon-left="language-python" to="/code" class="button is-dark" >
        Python
      </b-button>
      <b-button tag="router-link" icon-left="link-variant" to="/code" class="button is-dark">
        Pastebin
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodePreview",
};
</script>

<style>
</style>