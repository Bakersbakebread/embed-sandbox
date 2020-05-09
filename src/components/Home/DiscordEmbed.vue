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
              <div class="embed-title" v-if="embed.title && embed.url">
                <a href="#">{{embed.title}}</a>
              </div>

              <div class="embed-author embed-margin" v-if="embed.author.name">
                <img
                  class="embed-author-icon"
                  :src="embed.author.icon_url"
                  v-if="embed.author.icon_url"
                />
                <a class="embed-author-name" :href="embed.author.url">{{embed.author.name}}</a>
              </div>

              <div class="embed-title embed-margin" v-if="embed.title && !embed.url">{{embed.title}}</div>

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
                  <div class="field-name">{{ field.name }}</div>
                  <div class="field-value">{{ field.value }}</div>
                </div>
              </div>

              <div class="embed-footer" v-if="embed.footer.text">
                <img
                  class="embed-footer-icon"
                  :src="embed.footer.icon_url"
                  v-if="embed.footer.icon_url"
                />
                {{embed.footer.text}}
              </div>
            </div>

            <img class="embed-thumb" :src="embed.thumb_url" v-if="embed.thumb_url" />
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
        return 'danger';
      }
      if (this.remainingCharacters > 4000) {
        return 'warning';
      }
      return "";
    }
  },
  props: ["remainingCharacters"],
  methods: {
    getFieldWidth(field, fieldIndex) {
      console.log("starting...");
      const FIELD_GRID_SIZE = 12;
      const MAX_FIELDS_PER_ROW = 3;

      if (!field.inline) return `1 / ${FIELD_GRID_SIZE + 1}`;

      let startingField = fieldIndex;
      while (startingField > 0 && this.embed.fields[startingField - 1].inline) {
        startingField -= 1;
      }

      let totalInlineFields = 0;
      while (
        this.embed.fields.length > startingField + totalInlineFields &&
        this.embed.fields[startingField + totalInlineFields].inline
      ) {
        totalInlineFields += 1;
      }

      const indexInSequence = fieldIndex - startingField;
      const currentRow = indexInSequence / MAX_FIELDS_PER_ROW;
      const indexOnRow = indexInSequence % MAX_FIELDS_PER_ROW;
      const totalOnLastRow =
        totalInlineFields % MAX_FIELDS_PER_ROW || MAX_FIELDS_PER_ROW;
      const fullRows =
        (totalInlineFields - totalOnLastRow) / MAX_FIELDS_PER_ROW;
      const totalOnRow =
        currentRow >= fullRows ? totalOnLastRow : MAX_FIELDS_PER_ROW;

      const columnSpan = FIELD_GRID_SIZE / totalOnRow;
      const start = indexOnRow * columnSpan + 1;
      const end = start + columnSpan;

      return `${start} / ${end}`;
    }
  }
};
</script>
