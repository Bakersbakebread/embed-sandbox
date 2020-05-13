<template>
  <div>
    {{availableWebhooks}}
    <b-field label="Name">
      <b-input v-model="webhookName"></b-input>
    </b-field>
    <b-field label="Name">
      <b-input v-model="webhookUrl"></b-input>
    </b-field>
    <button @click="addNewWebhook">click me</button>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      webhookName: "",
      webhookUrl: ""
    };
  },
  computed: {
    availableWebhooks() {
      return this.$store.state.webhooks;
    }
  },
  validations: {
    webhookName: { required: required },
    webhookUrl: { required: required }
  },
  methods: {
    resetFields(){
      this.webhookName = ''
      this.webhookUrl = ''
    },
    addNewWebhook() {
      if (this.$v.webhookName.$invalid || this.$v.webhookUrl.$invalid) {
        console.log("invalid");
      } else {
        let data = { name: this.webhookName, url: this.webhookUrl };
        this.$store.commit("appendWebhook", data);
        
        this.resetFields()
      }
    }
  }
};
</script>

<style>
</style>