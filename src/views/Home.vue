<template>
  <div class="container">
    <TopPageHero />
    <div class="columns">
      <div class="column">
        <MainForm
          :open="collapseIdOpen == 'basicSettings'"
          @clicked="childCollapseClicked"
          :v="$v"
        />
        <AuthorSettings :open="collapseIdOpen == 'authorSettings'" @clicked="childCollapseClicked" />
        <FieldSettings
          :open="collapseIdOpen == 'fieldSettings'"
          @clicked="childCollapseClicked"
          :v="$v"
        />
        <FooterSettings :open="collapseIdOpen == 'footerSettings'" @clicked="childCollapseClicked" :v="$v"/>
      </div>
      <div class="column">
        <DiscordEmbed :remainingCharacters="totalCharacters" :v="$v" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopPageHero from "@/components/Home/TopPageHero.vue";
import DiscordEmbed from "@/components/Home/DiscordEmbed";
import MainForm from "@/components/Home/MainForm";
import AuthorSettings from "@/components/Home/AuthorSettings";
import FieldSettings from "@/components/Home/FieldSettings";
import FooterSettings from "@/components/Home/FooterSettings";
import { httpsUrlRegex } from "@/utils/validators.js";
import { maxLength } from "vuelidate/lib/validators";

export default {
  name: "Home",
  data() {
    return {
      collapseIdOpen: "",
      maxCharactersAllowed: 6000
    };
  },
  components: {
    TopPageHero,
    MainForm,
    DiscordEmbed,
    AuthorSettings,
    FieldSettings,
    FooterSettings
    // CodePreview
  },
  methods: {
    childCollapseClicked(value) {
      this.collapseIdOpen = value;
    }
  },
  computed: {
    embed() {
      return this.$store.state.embed;
    },
    totalCharacters() {
      var fieldsSum = this.embed.fields
        .map(element => element.name.length)
        .reduce((a, b) => a + b, 0);
      var fieldsDescSum = this.embed.fields
        .map(element => element.value.length)
        .reduce((a, b) => a + b, 0);

      var lengths = [
        this.embed.description.length,
        this.embed.title.length,
        this.embed.author.name.length,
        this.embed.footer.text.length,
        fieldsSum,
        fieldsDescSum
      ];

      return lengths.reduce((a, b) => a + b, 0);
    }
  },
  validations: {
    embed: {
      title: {
        maxLength: maxLength(256)
      },
      description: {
        maxLength: maxLength(2048)
      },
      url: {
        httpsUrlRegex
      },
      thumb_url: {
        httpsUrlRegex
      },
      footer:{
        icon_url:{
          httpsUrlRegex
        }
      }
    }
  }
};
</script>

<style>
.wumpus {
  width: 400px;
}
</style>