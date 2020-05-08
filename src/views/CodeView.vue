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
      >Back to editor</b-button>
    </div>

    <CodeBlock language="Json" :sourceCode="prettyPrintedJson" />
    <CodeBlock language="Python" :sourceCode="prettyPrintedPython"/>
    <CodeBlock />
  </div>
</template>

<script>
import TopPageHeader from "@/components/Layout/TopPageHeader";
import CodeBlock from "@/components/Layout/CodeBlock";
import {getPythonPrettyPrinted} from "@/utils/language-python.js"


export default {
  name: "JsonView",
  components: { TopPageHeader, CodeBlock },
  computed: {
    embed() {
      return this.$store.state.embed;
    },
    prettyPrintedJson() {
      return  JSON.stringify(this.embed, undefined, 4);
    },
    prettyPrintedPython(){
      var pythonCode = getPythonPrettyPrinted(this.embed);
      let printed = pythonCode;
      console.log(printed)
      return printed;
    }
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