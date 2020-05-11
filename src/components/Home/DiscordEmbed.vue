<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">Embed Preview</p>
      <router-link class="card-header-icon" to="/code">
        <b-icon icon="code-tags"></b-icon>
        <span>View as code</span>
      </router-link>
    </div>
    <div class="card-content">
      <div class="wrapper" style="margin: 0 auto;">
        <div class="embed" :style="{ borderLeft: 'solid 4px' + embed.color }">
          <div class="card-block">
            <div class="embed-inner">
              <div class="embed-title" v-if="embed.title">
                <a :href="embed.url" v-if="isValidProperty(embed.url, v.embed.url)">{{embed.title}}</a>
                <span v-else>{{embed.title}}</span>
              </div>

              <div class="embed-author embed-margin" v-if="embed.author.name">
                <img
                  class="embed-author-icon"
                  :src="embed.author.icon_url"
                  v-if="isValidProperty(embed.author.icon_url, embed.author.icon_url)"
                />
                <a class="embed-author-name" :href="embed.author.url">{{embed.author.name}}</a>
              </div>

              <div class="embed-description embed-margin" v-if="embed.description">
                <vue-simple-markdown :source="embed.description"></vue-simple-markdown>
              </div>
              <div class="fields" v-if="embed.fields">
                <div
                  v-for="(field, index) in embed.fields"
                  :key="index"
                  :class="'field ' + (field.inline ? 'inline' : '')"
                  :style="{gridColumn: getFieldWidth(field, index)}"
                >
                  <div class="field-name" v-if="field.name.length < 256">{{ field.name }}</div>
                  <div class="field-value" v-if="field.value.length < 1024">{{ field.value }}</div>
                </div>
              </div>

              <div class="embed-footer" v-if="isValidProperty(embed.footer.text, v.embed.footer.text)">
                <img
                  class="embed-footer-icon"
                  :src="embed.footer.icon_url"
                  v-if="isValidProperty(embed.footer.icon_url, v.embed.footer.icon_url)"
                />
                {{embed.footer.text}}
              </div>
            </div>

            <img class="embed-thumb" :src="embed.thumb_url" v-if="isValidProperty(embed.thumb_url, v.embed.thumb_url)" />
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <p
        class="card-footer-item"
        :class="characterLimitColor"
        style="justify-content: flex-end !important;"
      >
        {{remainingCharacters}} / 6000 characters
        <b-icon icon="information" type="is-warning" v-if="characterLimitIcon == 'warning'"></b-icon>
        <b-icon icon="information" type="is-danger" v-if="characterLimitIcon == 'danger'"></b-icon>
      </p>
    </footer>
  </div>
</template>

<script>
import { getFieldWidth } from "@/utils/discord-embed.js";

export default {
  name: "DiscordEmbed",
  computed: {
    embed() {
      return this.$store.state.embed;
    },
    characterLimitColor() {
      if (this.remainingCharacters > 5000) {
        return "has-text-danger";
      }
      if (this.remainingCharacters > 4000) {
        return "has-text-warning";
      }
      return "";
    },
    characterLimitIcon() {
      if (this.remainingCharacters > 5000) {
        return "danger";
      }
      if (this.remainingCharacters > 4000) {
        return "warning";
      }
      return "";
    }
  },
  props: ["remainingCharacters", "v"],
  methods: {
    getFieldWidth,
    isValidProperty(property, validatedProperty) {
      return property && !validatedProperty.$invalid;
    }
  }
};
</script>
