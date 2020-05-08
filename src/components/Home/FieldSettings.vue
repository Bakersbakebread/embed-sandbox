<template>
  <b-collapse
    class="card"
    style="margin-top: 1rem"
    animation="fade"
    aria-id="authorSettings"
    :open="open"
    @open="onClickButton"
  >
    <div
      slot="trigger"
      slot-scope="props"
      class="card-header"
      role="button"
      aria-controls="authorSettings"
    >
      <p class="card-header-title">Field settings</p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'arrow-up' : 'arrow-down'"></b-icon>
      </a>
    </div>
    <div class="card-content">
      <DiscordEmbedField/>
    </div>
  </b-collapse>
</template>

<script>
import DiscordEmbedField from '@/components/Form/DiscordEmbedField'
export default {
  name: "FieldSettings",
  props: ["open"],
  components: {DiscordEmbedField},
  methods: {
    onClickButton(event) {
      this.$emit("clicked", "fieldSettings", event);
    },
  }
};
</script>

<style>
</style>