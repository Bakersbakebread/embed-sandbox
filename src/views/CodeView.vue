<template>
  <div class="container code-container">
    <top-page-header>
      <template v-slot:header>Code Preview</template>
    </top-page-header>
    <div class="buttons">
      <b-button
        tag="router-link"
        icon-left="keyboard-backspace"
        to="/"
        type="is-primary"
        v-if="!errors && characters != 0 && errors != undefined"
      >Back to editor</b-button>
    </div>
    <div v-if="!errors && characters != 0 && errors != undefined">
      <CodeBlock language="Json" :sourceCode="prettyPrintedJson" />
      <CodeBlock language="Python" :sourceCode="prettyPrintedPython" />
      <CodeBlock />
    </div>
    <section v-else class="has-text-centered">
      <div
        class="notification is-danger"
      >
      <span v-if="characters > 0">There are errors in your embed, correct them before viewing as code.</span>
      <span v-else>You must enter something to view it as code... ¯\_(ツ)_/¯</span></div>
      <b-button
        tag="router-link"
        icon-left="keyboard-backspace"
        to="/"
        type="is-primary"
      >Back to editor</b-button>
    </section>
  </div>
</template>

<script>
import TopPageHeader from "@/components/Layout/TopPageHeader";
import CodeBlock from "@/components/Layout/CodeBlock";
import { getPythonPrettyPrinted } from "@/utils/language-python.js";

/* eslint-disable */
function removeEmptyStrings(key, value) {
  if (key == "author" || key == "footer") {
    for (let [k, v] of Object.entries(value)) {
      if (v == "") {
        return undefined;
      }
    }
  }
  if (key == "fields") {
    for (let [k, v] of Object.entries(value)) {
      for (let [dk, dv] of Object.entries(v)) {
        if (dv == "") {
          return undefined;
        }
      }
    }
  }
  if (value == "") {
    return undefined;
  } else {
    return value;
  }
}

export default {
  name: "JsonView",
  components: { TopPageHeader, CodeBlock },
  props: ["errors", "characters"],
  computed: {
    embed() {
      return this.$store.state.embed;
    },
    prettyPrintedJson() {
      return JSON.stringify(this.embed, removeEmptyStrings, 4);
    },
    prettyPrintedPython() {
      var pythonCode = getPythonPrettyPrinted(this.embed);
      let printed = pythonCode;
      return printed;
    },
  }
};
</script>

<style scoped>
.code-container {
  max-width: 50vw;
}
@media screen and (max-width: 500px) {
  .code-container {
    width: 90vw;
  }
}
</style>