<template>
    <div class="img_container">
        <img :src="require(`@/assets/${image}`)" class="img"/>
        <span class="hover_text">{{ msg }}</span>
    </div>
</template>

<script>
export default {
    name: 'ImageContainer',
    props: {
        msg:{
            type: String,
            default: 'Hovered Text',
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

.img_container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img_container img:hover + .hover_text {
    opacity: 1;
}

.img{
    width: 100px;
    height: 100px;
}

.hover_text {
    cursor: default;
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 150;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    border-radius: 10px;
}

.hover_text:hover {
    opacity: 1;
}

</style>