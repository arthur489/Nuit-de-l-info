<template>
    <div id="bubble-container">
        <div class="bubble"></div>
        <div class="bubble" style="left: 10%; animation-duration: 4s;"></div>
        <div class="bubble" style="left: 20%; animation-duration: 5s;"></div>
        <div class="bubble" style="left: 30%; animation-duration: 6s;"></div>
        <div class="bubble" style="left: 40%; animation-duration: 7s;"></div>
        <div class="bubble" style="left: 50%; animation-duration: 8s;"></div>
        <div class="bubble" style="left: 60%; animation-duration: 5s;"></div>
        <div class="bubble" style="left: 70%; animation-duration: 7s;"></div>
        <div class="bubble" style="left: 80%; animation-duration: 4s;"></div>
        <div class="bubble" style="left: 90%; animation-duration: 6s;"></div>
    </div>
</template>

<script>

export default {
  name: 'BubbleComponent',
}

</script>

<style scoped>

#bubble-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bubble {
  position: fixed;
  bottom: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 204, 255, 1) 0%, rgba(0, 150, 255, 0.8) 100%);
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.5), 0 0 30px rgba(0, 204, 255, 0.4);
  opacity: 0;
  animation: bubble-animation 5s linear infinite;
}

@keyframes bubble-animation {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100vh);
  }
}

</style>