<template>
  <div id="background-wrap">
    <div class="wumpus-fly"></div>
    <div class="x1">
      <div class="cloud"></div>
    </div>

    <div class="x2">
      <div class="cloud"></div>
    </div>

    <div class="x3">
      <div class="cloud"></div>
    </div>

    <div class="x4">
      <div class="cloud"></div>
    </div>

    <div class="x5">
      <div class="cloud"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CloudsBackground"
};
</script>

<style>
.wumpus-fly {
  position: absolute;
  animation: animateCloud 30s linear infinite, shake 2s linear infinite;
  background: url("../../assets/images/wumpusfly.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 130px;
  width: 500px;
  z-index: 1;
  top: 15px;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-1px, 0px) rotate(1deg); }
  30% { transform: translate(1px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-1px, 1px) rotate(0deg); }
  70% { transform: translate(1px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 1px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>