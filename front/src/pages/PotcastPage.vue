<template>
    <button @click="$router.push('/')" class="button">Retour</button>
    <div class="audio-container">
      <h2>Podcast de Frederic Le Moigne (audio)</h2>
      <iframe src="https://1drv.ms/u/c/e625f15aac5844d0/IQQ6O92KOLAgTKIJY1vboggTAWuEtddnCbAc-5jGRYlgu5U" width="250" height="120" frameborder="0" scrolling="no"></iframe>
      <div class="video-container">
        <h2>Podcast de Frederic Le Moigne (vidéos)</h2>
        <div class="video-row">
          <div class="video-item">
            <h3>Partie 1</h3>
            <iframe src="https://1drv.ms/v/c/e625f15aac5844d0/IQTo-PL74HPDQ6o6Mjh4uKZFAZ2TUYiicCnZlU4iX1wWxEA" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen></iframe>
          </div>
          <div class="video-item">
            <h3>Partie 2</h3>
            <iframe src="https://1drv.ms/v/c/e625f15aac5844d0/IQQBfCr_-Ub-R7_k82A5lKx6Afd8qAutpJNyJ3QjFBHt55U" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script>

export default {
  name: 'PotcastPage',
}

</script>

<style scoped>

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 15px;
    cursor: pointer;
    margin: 10px;
}

h2, h3 {
  color: aliceblue;
  text-align: center;
}

.audio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.video-row {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
}

.video-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


</style>