<template>
    <button @click="$router.push('/')" class="button">Retour</button>
    <div class="audio-container">
      <h2>Podcast de Frederic Le Moigne (audio)</h2>
      <audio controls style="width:650px">
        <source src="@/assets/audio.m4a" type="audio/mp4" />
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio>
      <div class="video-container">
        <h2>Podcast de Frederic Le Moigne (vidéos)</h2>
        <div class="video-row">
          <div class="video-item">
            <h3>Partie 1</h3>
            <video controls width="500" height="280">
              <source src="@/assets/Frederic_Le_Moigne_-_Part_1-SD_480p.mov" type="video/mp4" />
              Votre navigateur ne prend pas en charge l'élément vidéo.
            </video>
          </div>
          <div class="video-item">
            <h3>Partie 2</h3>
            <video controls width="500" height="280">
              <source src="@/assets/Frederic_Le_Moigne_-_Part_2-SD_480p.mov" type="video/mp4" />
              Votre navigateur ne prend pas en charge l'élément vidéo.
            </video>
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