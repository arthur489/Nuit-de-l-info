<template>
    <div style="display: flex; gap: 20px;">
        <ImageContainer :msg="msg_left" :image="image_left"/>
            <h1 style="font-size: 50px;">
                =
            </h1>
        <ImageContainer :msg="msg_right" :image="image_right"/>
        <button class="details" @click="ViewDesc">
            Details
        </button>
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
        },
        id :{
            type: Number,
            default: 0,
            required: true
        },
    },
    methods: {
        ViewDesc() {
            this.$router.push({name: 'DescriptionPage', params: {id: this.id}});
        }
    }
}

</script>

<style scoped>


.details:hover {
    background-color: darkblue;
}   

.details:active {
    background-color: lightblue;
    color: black;
}
.details {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 15px;
    padding: 10px 20px;
    cursor: pointer;
    height: 40px;
    margin-top: 42px;
}

</style>