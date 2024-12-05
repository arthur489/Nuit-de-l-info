<template>
    
    <div class="home_page">
        <BulleComponent/>
        <EqualComponent v-for="(item, index) in list" 
            :key="index"
            :msg_left="item.msg_left" 
            :msg_right="item.msg_right" 
            :image_left="item.image_left" 
            :image_right="item.image_right"
            :id="item.id"
        />
    </div>
</template>

<script>

import EqualComponent from '@/component/EqualComponent.vue';
import BulleComponent from '@/component/BulleComponent.vue';


export default {
    name: 'HomePage',
    components: {
        EqualComponent,
        BulleComponent
    },
    data() {
        return {
            list: [
                {
                    msg_left: 'Coeur',
                    msg_right: 'Courant',
                    image_left: 'coeur.jpg',
                    image_right: 'courant.jpg',
                    id: 1
                },
                {
                    msg_left: 'Poumon',
                    msg_right: 'Photosynthèse',
                    image_left: 'poumon.jpg',
                    image_right: 'photosynthèse.jpg',
                    id: 2
                },
                {
                    msg_left: 'Squelette',
                    msg_right: 'Récif de corail',
                    image_left: 'squelette.webp',
                    image_right: 'corail.jpg',
                    id: 3
                },
                {
                    msg_left: 'peau',
                    msg_right: "surface de l'eau",
                    image_left: 'peau.jpg',
                    image_right: 'water.jpg',
                    id: 4
                },
                {
                    msg_left: 'systeme immunitaire',
                    msg_right: 'écosystème',
                    image_left: 'systeme_im.png',
                    image_right: 'ecosystem.png',
                    id: 5
                },
                {
                    msg_left: 'microbiote',
                    msg_right: 'plancton',
                    image_left: 'microbiote.jpeg',
                    image_right: 'plancton.webp',
                    id: 6
                },
                {
                    msg_left: 'reins',
                    msg_right: 'marée',
                    image_left: 'rein.jpeg',
                    image_right: 'marée.jpg',
                    id: 7
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
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
}

</style> 