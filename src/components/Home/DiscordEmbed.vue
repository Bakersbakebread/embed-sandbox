<template>
  <div class="card">
    <div class="card-title">
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
            </div>

            <img class="embed-thumb" :src="embed.thumb_url" v-if="embed.thumb_url" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueMarkdown from "vue-markdown";

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
(47,307 visible now, 47,307 total)`
    }
  }
};
</script>