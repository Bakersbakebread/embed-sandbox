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
      <p class="card-header-title">Author Settings</p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'arrow-up' : 'arrow-down'"></b-icon>
      </a>
    </div>
    <div class="card-content">
      <b-field grouped>
        <b-field label="Author Name">
          <b-input v-model="name"></b-input>
        </b-field>
        <div class="field">
          <b-switch :value="true" type="is-success">Success</b-switch>
        </div>
      </b-field>
      <b-field label="Value">
        <b-input v-model="url" text-area></b-input>
      </b-field>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: "FieldSettings",
  props: ["open"],
  methods: {
    onClickButton(event) {
      this.$emit("clicked", "fieldSettings", event);
    }
  }
};
</script>

<style>
</style>