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
                },
                {
                    msg_left: 'Squelette',
                    msg_right: 'Récif de corail',
                    image_left: 'squelette.webp',
                    image_right: 'corail.jpg'
                },
                {
                    msg_left: 'peau',
                    msg_right: "surface de l'eau",
                    image_left: 'peau.jpg',
                    image_right: 'water.jpg'
                },
                {
                    msg_left: 'systeme immunitaire',
                    msg_right: 'écosystème',
                    image_left: 'systeme_im.png',
                    image_right: 'ecosystem.png'
                },
                {
                    msg_left: 'microbiote',
                    msg_right: 'plancton',
                    image_left: 'microbiote.jpeg',
                    image_right: 'plancton.webp'
                },
                {
                    msg_left: 'reins',
                    msg_right: 'marée',
                    image_left: 'rein.jpeg',
                    image_right: 'marée.jpg'
                },
                
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
    gap: 0px;
    flex-wrap: wrap;
    flex-direction: column;
}

</style> 