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
      <p class="card-header-title">Author settings</p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'arrow-up' : 'arrow-down'"></b-icon>
      </a>
    </div>
    <div class="card-content">
      <b-field label="Name">
        <b-input v-model="name"></b-input>
      </b-field>

      <b-field>
        <template slot="label">
          Author URL
          <https-only-tooltip></https-only-tooltip>
        </template>
        <b-input v-model="url" :disabled="authorNameIsEmpty"></b-input>
      </b-field>

      <b-field>
        <template slot="label">
          Author icon URL
          <https-only-tooltip></https-only-tooltip>
        </template>
        <b-input v-model="icon_url" :disabled="authorNameIsEmpty"></b-input>
      </b-field>
    </div>
  </b-collapse>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "AuthorSettings",
  computed: {
    ...mapFields([
      "embed.author.name",
      "embed.author.url",
      "embed.author.icon_url"
    ]),
    authorNameIsEmpty() {
      return this.name === "";
    }
  },
  props: ["open"],
  methods: {
    onClickButton(event) {
      this.$emit("clicked", "authorSettings", event);
    }
  }
};
</script>
