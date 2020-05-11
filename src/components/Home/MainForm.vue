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
      <b-field
        label="Title"
        :type="v.embed.title.$invalid ? 'is-danger' : ''"
        :message="v.embed.title.$invalid ? 'Title can only be 256 characters' : ''"
        
      >
        <b-input v-model="title" maxlength="256" ></b-input>
      </b-field>

      <b-field
        label="Description"
        :type="v.embed.description.$invalid ? 'is-danger' : ''"
        :message="v.embed.description.$invalid ? 'Description can only be 2048 characters' : ''"
      >
        <b-input v-model="description" type="textarea" maxlength="2048"></b-input>
      </b-field>

      <b-field
        label="Url"
        :type="v.embed.url.$invalid ? 'is-danger' : ''"
        :message="v.embed.url.$invalid ? 'Invalid URL, only https is supported.' : ''"
      >
        <b-input v-model="url"></b-input>
      </b-field>

      <b-field
        :type="v.embed.thumb_url.$invalid ? 'is-danger' : ''"
        :message="v.embed.thumb_url.$invalid ? 'Invalid URL, only https is supported.' : ''"
      >
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
    ...mapFields([
      "embed.title",
      "embed.url",
      "embed.description",
      "embed.color",
      "embed.thumb_url"
    ])
  },
  props: ["open", "v"],
  methods: {
    onClickButton(event) {
      this.$emit("clicked", "basicSettings", event);
    }
  },
};
</script>
<style>
.swatches-overide {
  background: none;
  border: none;
}
.vue-swatches__fallback__wrapper {
  padding: 0px !important;
  margin: 0px !important;
}
</style>