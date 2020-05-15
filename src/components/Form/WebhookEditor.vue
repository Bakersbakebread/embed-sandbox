<template>
  <div>
    <div class="field is-grouped button-block">
      <b-button
        type="is-success is-fullwidth ml-1"
        icon-left="content-save"
        @click="handleData()"
      >Save webhooks</b-button>

      <b-button type="is-white is-outlined is-fullwidth ml-1" @click="handleData()">Cancel</b-button>
    </div>
    <div class="webhook-block" v-for="(webhook, index) in availableWebhooks" :key="index">
      <b-field type="has-background-white has-text-dark">
        <template slot="label">
          <span class="has-text-white">Name</span>
        </template>
        <b-input v-model="webhook.name"></b-input>
      </b-field>
      <b-field type="has-background-white has-text-dark">
        <template slot="label">
          <span class="has-text-white">Webhook URL</span>
        </template>
        <b-input v-model="webhook.url"></b-input>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      availableWebhooks: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.availableWebhooks = this.$store.state.webhooks;
    },
    handleData() {
      this.$emit("stopEditing");
    }
  }
};
</script>

<style>
.webhook-block {
  margin-top: 3rem;
}
.button-block{
    margin-top: 1rem;
}
.button-block .button:nth-child(2){
    margin-left: 1rem;
}
</style>