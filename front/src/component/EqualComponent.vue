<template>
    <div class="details" @click="ViewDesc">
        <ImageContainer :msg="msg_left" :image="image_left"/>
            <h1 style="font-size: 50px; color: white;">
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
        ImageContainer,
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
        description : {
            type: String,
            default: 'Description',
            required: true
        },
        title : {
            type: String,
            default: 'Title',
            required: true
        }
    },
    methods: {
        ViewDesc() {
            localStorage.setItem('description', this.description);
            localStorage.setItem('image_left', this.image_left);
            localStorage.setItem('image_right', this.image_right);
            localStorage.setItem('title', this.title);
            this.$router.push({name: 'DescriptionPage'});
        }
    }
}

</script>

<style scoped>


.details:hover {
    background-color: darkblue;
    cursor: pointer;
}   

.details:active {
    background-color: rgb(0, 0, 53);
    color: black;
}
.details {
    display: flex; 
    gap: 20px; 
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 20px;
    width: 15%;
}

</style>