<template>
    <div style="display: flex; gap: 20px;">
        <ImageContainer :msg="msg_left" :image="image_left"/>
            <h1 style="font-size: 50px;">
                =
            </h1>
        <ImageContainer :msg="msg_right" :image="image_right"/>
    </div>
</template>

<script>

import ImageContainer from './ImageContainer.vue';

export default {
    name: 'EqualComponent',
    components: {
        ImageContainer
    },
    props: {
        msg_left: {
            type: String,
            default: 'Coeur',
            required: true
        },
        msg_right: {
            type: String,
            default: 'Courant',
            required: true
        },

        image_left: {
            type: String,
            default: 'coeur.jpg',
            required: true
        },
        image_right: {
            type: String,
            default: 'courant.jpg',
            required: true
        }
    }
}

</script>