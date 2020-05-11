<template>
  <div>
    <div v-for="(field, index) in fields" :key="index" class="field-forms">
      <b-field :label="'Field ' + (index + 1) + ' name'" class="field-name">
        <b-input v-model="field.name" maxlength="256"></b-input>
      </b-field>

      <div class="field field-inline">
        <b-switch v-model="field.inline" type="is-success" style="margin-top: 1rem;" >Inline</b-switch>
      </div>

      <b-field :label="'Field ' + (index + 1) + ' value'" class="field-value">
        <b-input v-model="field.value" type="textarea" :disabled="field.name == ''" maxlength="1024"></b-input>
      </b-field>

      <div class="buttons btn-group">
        <button
          class="button is-dark delete-field"
          v-if="index !== fields.length - 1"
          @click="moveDown(index)"
        >
          <b-icon type="is-light" icon="arrow-down-bold"></b-icon>
          <span>Move down</span>
        </button>
        <button class="button is-dark delete-field" v-if="index !== 0" @click="moveUp(index)">
          <b-icon type="is-light" icon="arrow-up-bold"></b-icon>
          <span>Move up</span>
        </button>
        <button class="button is-dark delete-field" @click="deleteField(index)">
          <b-icon type="is-danger" icon="delete"></b-icon>
          <span class="has-text-danger">Delete</span>
        </button>
      </div>
    </div>
    <div class="is-flex">
      <b-button
        @click="addField()"
        type="is-primary"
        expanded
        outlined
        style="margin: 1rem;"
      >Add new</b-button>
    </div>
  </div>
</template>

<script>
import { mapMultiRowFields } from "vuex-map-fields";
import { mapMutations } from "vuex";

export default {
  name: "DiscordEmbedField",
  computed: {
    ...mapMultiRowFields(["embed.fields"])
  },
  methods: {
    ...mapMutations({
      moveUp: "moveFieldUp",
      moveDown: "moveFieldDown",
      deleteField: "deleteField"
    }),
    addField() {
      this.$store.commit("addField", { name: "", inline: false, value: "" });
    },
  }
};
</script>

<style>
.field-forms {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3rem;
}
.value {
  flex-grow: 1;
}
.field-name {
  flex-grow: 1;
}
.field-inline {
  margin-left: auto;
  padding-left: 1rem;
  margin-top: auto;
}
.field-value {
  width: 100%;
}
.btn-group {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>