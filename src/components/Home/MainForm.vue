<template>
  <b-collapse
    class="card"
    animation="fade"
    aria-id="contentIdForA11y3"
    :open="open"
    @open="onClickButton"
  >
    <div
      slot="trigger"
      slot-scope="props"
      class="card-header"
      role="button"
      aria-controls="contentIdForA11y3"
    >
      <p class="card-header-title">Basic settings</p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'arrow-up' : 'arrow-down'"></b-icon>
      </a>
    </div>
    <div class="card-content">
      <b-field label="Title">
        <b-input v-model="title"></b-input>
      </b-field>

      <b-field label="Description">
        <b-input v-model="description" type="textarea"></b-input>
      </b-field>

      <b-field label="Url">
        <b-input v-model="url"></b-input>
      </b-field>

      <b-field>
        <template slot="label">
          Thumbnail URL
          <b-tooltip
            type="is-dark"
            label="The source URL for the thumbnail. Only HTTP(S) is supported."
          >
            <b-icon size="is-small" icon="help-circle-outline"></b-icon>
          </b-tooltip>
        </template>
        <b-input v-model="thumb_url"></b-input>
      </b-field>

      <b-field label="Color">
        <v-swatches
          inline
          background-color="inherit"
          v-model="color"
          show-fallback
          fallback-input-type="color"
          fallback-ok-class="is-invisible"
          fallback-input-class="input swatches-overide"
          :wrapper-style="{ padding: '0px' }"
          shapes="circles"
          popover-x="right"
        >
          <b-input slot="trigger" v-model="color"></b-input>
        </v-swatches>
      </b-field>
    </div>
  </b-collapse>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import VSwatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.css";

export default {
  name: "MainForm",
  components: { VSwatches },
  computed: {
    // When using nested data structures, the string
    // after the last dot (e.g. `firstName`) is used
    // for defining the name of the computed property.
    ...mapFields([
      "embed.title",
      "embed.url",
      "embed.description",
      "embed.color",
      "embed.thumb_url"
    ])
  },
  props: ["open"],
  methods: {
    onClickButton(event) {
      this.$emit("clicked", "basicSettings", event);
    }
  }
};
</script>
<style>
.swatches-overide{
  background: none;
  border: none;
}
.vue-swatches__fallback__wrapper{
  padding: 0px !important;
  margin: 0px !important;
}
</style>