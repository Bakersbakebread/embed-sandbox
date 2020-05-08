<template>
  <div class="card" style="margin-top: 1rem">
    <div class="card-header">
      <p class="card-header-title">Code Preview</p>
    </div>
    <div class="card-content">
      <button class="button is-dark">
        <b-icon icon="json"></b-icon>
        <span>Json</span>
      </button>
      <button class="button is-dark" >
        <b-icon icon="language-python"></b-icon>
        <span>Python</span>
      </button>
      <button class="button is-dark">
        <b-icon icon="link-variant spin"></b-icon>
        <span>Pastebin</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodePreview"
};
</script>

<style>
</style>