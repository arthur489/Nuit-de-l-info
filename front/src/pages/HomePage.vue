<template>
    <div class="home_page">
        <EqualComponent
            msg_left="Coeur"
            msg_right="Courant"
            image_left="coeur.jpg"
            image_right="courant.jpg"
        />
    </div>
</template>

<script>

import EqualComponent from '@/component/EqualComponent.vue';


export default {
    name: 'HomePage',
    components: {
        EqualComponent
    }
}

</script>

<style scoped>

.home_page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: aqua;
    gap: 20px;
    flex-wrap: wrap;
}

</style> 