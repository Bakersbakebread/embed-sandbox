<template>
  <div class="beta-notification has-background-primary">
    ALPHA
  </div>
</template>

<script>
export default {
  name: "TopNavBar"
};
</script>

<style scoped>
.beta-notification {
  position: fixed;
  width: 80px;
  height: 25px;
  top: 7px;
  left: -20px;
  text-align: center;
  font-size: 13px;
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  line-height: 27px;
  transform:rotate(-45deg);
}
</style>