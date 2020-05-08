<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">Embed Preview</p>
    </div>
    <div class="card-content">
      <div class="wrapper">
        <div class="embed" :style="{ borderLeft: 'solid 4px' + embed.color }">
          <div class="card-block">
            <div class="embed-inner">
              <div class="embed-title" v-if="embed.title && embed.url">
                <a href="#">{{embed.title}}</a>
              </div>

              <div class="embed-title embed-margin" v-if="embed.title && !embed.url">{{embed.title}}</div>

              <div class="embed-author" v-if="embed.author">
                <img class="embed-author-icon" :src="embed.author.icon" v-if="embed.author.icon" />
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
                <div class="field-name">{{ field.name }}</div>
                <div class="field-value">{{ field.value }}</div>
              </div>
            </div>
            </div>

            <img class="embed-thumb" :src="embed.thumb_url" v-if="embed.thumb_url" />

            

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscordEmbed",
  // components: { VueMarkdown },
  computed: {
    embed() {
      return this.$store.state.embed;
    },
    d() {
      return `Lucario is running on \`1\` shard.
Serving \`9\` servers (663 channels).
For a total of 47,307 users (46,865 unique).
(47,307 visible now, 47,307 total)`;
    }
  },
  methods: {
    getFieldWidth(field, fieldIndex) {
      console.log('starting...')
      const FIELD_GRID_SIZE = 12;
      const MAX_FIELDS_PER_ROW = 3;

      if (!field.inline) return `1 / ${FIELD_GRID_SIZE + 1}`;

      let startingField = fieldIndex;
      while (
        startingField > 0 &&
        this.embed.fields[startingField - 1].inline
      ) {
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
