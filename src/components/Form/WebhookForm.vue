<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__bounceInLeft animate__faster"
    leave-active-class="animate__animated animate__bounceOutLeft animate__faster"
    appear
    mode="out-in"
  >
    <div v-if="!loading & !isEditing" key="1">
      <template v-if="availableWebhooks.length != 0">
        <div class="label has-text-white">Choose an existing webhook</div>
        <b-field type="is-primary">
          <!-- <template slot="label">
            <span class="has-text-light">Choose an existing webhook</span>
          </template>-->
          <div class="select is-fullwidth">
            <select v-model="selectedWebhook" class="has-background-light has-text-dark">
              <option
                v-for="(option, index) in availableWebhooks"
                :value="option.url"
                :key="index"
              >{{ option.name }}</option>
            </select>
          </div>
          <b-button
            type="is-light is-outlined"
            icon-left="pencil"
            style="margin-left: 1rem;"
            @click="isEditing = true"
          ></b-button>
        </b-field>
        <div class="separator">OR</div>
      </template>
      <b-field
        :type="$v.webhookUrl.$invalid ? 'is-danger has-text-weight-bold' : ''"
        :message="$v.webhookUrl.$invalid ? 'Invalid webhook URL' : ''"
      >
        <template slot="label">
          <span class="has-text-light">Enter a new webhook URL</span>
          <https-only-tooltip></https-only-tooltip>
        </template>
        <b-input v-model="webhookUrl" custom-class="has-background-light has-text-dark"></b-input>
      </b-field>
      <b-button
        v-if="showSaveNewButton"
        @click="isSavingNew = true"
        type="is-light is-outlined is-small"
        :disabled="this.$v.webhookUrl.$invalid"
      >Save for future use</b-button>

      <b-field
        v-if="isValidToAskForName"
        :message="webhookUrl != '' ? 'This webhook will be saved after it has been sent 👍🏼' : ''"
      >
        <template slot="label">
          <span class="has-text-light">What would you like to call this webhook?</span>
        </template>
        <b-input v-model="webhookName" custom-class="has-background-light has-text-dark"></b-input>
      </b-field>
      <b-button
        class="send-button"
        @click="addNewWebhook"
        :disabled="isInvalidToSend"
        type="is-success"
        style="width: 90%"
      >Send webhook</b-button>
    </div>

    <div v-if="isEditing" key="2">
      <WebhookEditor @stopEditing="isEditing = false" />
    </div>

    <div v-if="loading" key="3">
      <div class="loading-bread">
        <img src="@/assets/images/wumpusbread.png" />
        <span>Loading...</span>
      </div>
    </div>
  </transition>
</template>

<script>
import { httpsUrlRegex } from "@/utils/validators.js";
import WebhookEditor from "@/components/Form/WebhookEditor";

export default {
  data() {
    return {
      webhookName: "",
      webhookUrl: "",
      selectedWebhook: "",
      isSavingNew: false,
      loading: false,
      isEditing: false
    };
  },
  components: { WebhookEditor },
  computed: {
    availableWebhooks() {
      return this.$store.state.webhooks;
    },
    showSaveNewButton() {
      return this.webhookUrl != "" && this.isSavingNew === false;
    },
    isInvalidToSend() {
      return (
        (this.webhookUrl == "" || this.$v.webhookUrl.$invalid) &&
        this.selectedWebhook == ""
      );
    },
    isValidToAskForName() {
      return (
        (this.webhookUrl != "" || this.$v.webhookUrl.$invalid) &&
        this.isSavingNew === true
      );
    }
  },
  watch: {
    webhookUrl(val) {
      if (!val) {
        this.isSavingNew = false;
      } else {
        this.selectedWebhook = val;
      }
    }
  },
  validations: {
    webhookUrl: { httpsUrlRegex }
  },
  methods: {
    resetFields() {
      this.webhookName = "";
      this.webhookUrl = "";
    },
    addNewWebhook() {
      if (this.webhookName == "" || this.$v.webhookUrl.$invalid) {
        this.loading = true;
        console.log("invalid");
      } else {
        this.loading = true;
        let data = { name: this.webhookName, url: this.webhookUrl };
        this.$store.commit("appendWebhook", data);
        this.resetFields();
      }
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.loading-bread {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  & span {
    font-family: "Uni Sans Heavy CAPS";
    font-size: 1.4rem;
  }
}
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
}
.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #fff;
}
.separator::before {
  margin-right: 0.25em;
}
.separator::after {
  margin-left: 0.25em;
}
.send-button {
  position: absolute;
  bottom: 1rem;
}
</style>