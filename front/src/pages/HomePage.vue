<template>
    <div class="home_page">
        <EqualComponent v-for="(item, index) in list" 
            :key="index" 
            :msg_left="item.msg_left" 
            :msg_right="item.msg_right" 
            :image_left="item.image_left" 
            :image_right="item.image_right"
        />
    </div>
</template>

<script>

import EqualComponent from '@/component/EqualComponent.vue';


export default {
    name: 'HomePage',
    components: {
        EqualComponent
    },
    data() {
        return {
            list: [
                {
                    msg_left: 'Coeur',
                    msg_right: 'Courant',
                    image_left: 'coeur.jpg',
                    image_right: 'courant.jpg'
                },
                {
                    msg_left: 'Poumon',
                    msg_right: 'Photosynthèse',
                    image_left: 'poumon.jpg',
                    image_right: 'photosynthèse.jpg'
                }
            ]
        }
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
    flex-direction: column;
}

</style> 