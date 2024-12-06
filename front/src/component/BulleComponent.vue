<template>
    <div id="bubble-container">
        <div v-for="(bubble, index) in bubbles" 
            :key="index" 
            class="bubble" 
            :style="{ left: bubble.left, animationDuration: bubble.duration }"
        />
    </div>
</template>

<script>

export default {
    name: 'BubbleComponent',
    data() {
        return {
            bubbles: []
        }
    },
    mounted() {
        this.createBubble();
    },
    methods: {
        createBubble() {
            setInterval(() => {
                if (this.bubbles.length < 500) {
                    this.bubbles.push({
                        left: `${Math.random() * 100}vw`,
                        duration: `${Math.random() * 3 + 5}s`,
                    });
                }
            }, 50);
        },
    }
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
  z-index: 100;
}

@keyframes bubble-animation {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0.45;
    transform: translateY(-100vh);
  }
}

</style>