<template>
  <b-collapse class="card" style="margin-top: 1rem" animation="fade" aria-id="authorSettings" :open="open" @open="onClickButton">
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
      <b-field label="Author Name">
        <b-input v-model="name"></b-input>
      </b-field>

      <b-field label="Author URL">
        <b-input v-model="url"></b-input>
      </b-field>

      <b-field>
        <template slot="label">
          Author icon URL
          <b-tooltip
            type="is-dark"
            label="The source URL for the thumbnail. Only HTTP(S) is supported."
          >
            <b-icon size="is-small" icon="help-circle-outline"></b-icon>
          </b-tooltip>
        </template>
        <b-input v-model="icon"></b-input>
      </b-field>
    </div>
  </b-collapse>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "AuthorSettings",
  computed: {
    // When using nested data structures, the string
    // after the last dot (e.g. `firstName`) is used
    // for defining the name of the computed property.
    ...mapFields(["embed.author.name", "embed.author.url", "embed.author.icon"])
  },
  props:['open'],
  methods: {
    onClickButton(event) {
      this.$emit("clicked", "authorSettings", event);
    }
  }
};
</script>
