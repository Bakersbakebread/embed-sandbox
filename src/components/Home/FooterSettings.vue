<template>
  <b-collapse class="card" style="margin-top: 1rem" animation="fade" aria-id="authorSettings" :open="open" @open="onClickButton">
    <div
      slot="trigger"
      slot-scope="props"
      class="card-header"
      role="button"
      aria-controls="authorSettings"
    >
      <p class="card-header-title">Footer settings</p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'arrow-up' : 'arrow-down'"></b-icon>
      </a>
    </div>
    <div class="card-content">
      <b-field label="Footer text">
        <b-input v-model="text" ></b-input>
      </b-field>

      <b-field>
        <template slot="label">
          Icon URL
          <https-only-tooltip></https-only-tooltip>
        </template>
        <b-input v-model="icon_url" :disabled="text === ''"></b-input>
      </b-field>
    </div>
  </b-collapse>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "AuthorSettings",
  computed: {
    ...mapFields(["embed.footer.text", "embed.footer.icon_url"])
  },
  props:['open'],
  methods: {
    onClickButton(event) {
      this.$emit("clicked", "footerSettings", event);
    }
  }
};
</script>
