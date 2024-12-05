<template>
    <div id="bubble-container">
        <div class="bubble"></div>
        <div class="bubble" style="left: 10%; animation-duration: 4s;"></div>
        <div class="bubble" style="left: 20%; animation-duration: 5s;"></div>
        <div class="bubble" style="left: 30%; animation-duration: 6s;"></div>
        <div class="bubble" style="left: 40%; animation-duration: 7s;"></div>
        <div class="bubble" style="left: 50%; animation-duration: 8s;"></div>
        <div class="bubble" style="left: 60%; animation-duration: 9s;"></div>
    </div>
</template>

<script>

export default {
  name: 'BubbleComponent',
  mounted() {
    const bubbleContainer = document.getElementById('bubble-container');
    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = 10*i + '%';
      bubble.style.animationDuration = `${Math.random() * 6 + 3}s`;
      bubbleContainer.appendChild(bubble);
    }
  }
  //created
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
  background-color: blue;
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