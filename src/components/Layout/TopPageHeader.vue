<template>
    <section class="section">
      <h2 class="has-text-centered has-text-white">
       <slot name="header"></slot>
      </h2>
      <p class="subtitle has-text-centered">
        <slot name="subtitle"></slot>
      </p>
  </section>
</template>

<script>
export default {
    name: "TopPageHeader"
};
</script>

<style>
</style>