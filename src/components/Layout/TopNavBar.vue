<template>
  <b-navbar>
    <template slot="brand">    </template>
    <template slot="start"></template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-dark" href="https://github.com/bakersbakebread/embedsandbox">
            <b-icon icon="github-circle"></b-icon>
            <span>Look under the hood</span>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "TopNavBar"
};
</script>