<template>
    <div class="title">
        <h1>{{ title }}</h1>
    </div>
    <div class="img-equal">
        <ImageContainer :msg="description" :image="image_left"/>
        <ImageContainer :msg="description" :image="image_right"/>
    </div>
    <div class="description">
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'DescriptionPage',
    data(){
        return {
            description: this.$route.params.description,
        }
    },
}
</script>

<style scoped>

.description {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 80%;
    margin-left: 10%;
    font-size: 35px;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.img-equal {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

</style>