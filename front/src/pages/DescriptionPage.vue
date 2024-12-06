<template>
    <button @click="back" class="button">
        Back
    </button>
    <div class="title">
        <h1 style="color:aliceblue">{{ title }}</h1>
    </div>
    <div class="img-equal">
        <img :src="require(`@/assets/${image_left}`)" class="img"/>
        <img :src="require(`@/assets/${image_right}`)" class="img"/>
    </div>
    <div class="description" @click="move" id="description">
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'DescriptionPage',
    data(){
        return {
            description: localStorage.getItem('description'),
            image_left: localStorage.getItem('image_left'),
            image_right: localStorage.getItem('image_right'),
            title: localStorage.getItem('title'),
            position: 0,
            has_been_clicked: false
        }
    },
    methods: {
        move() {
            if (this.has_been_clicked) {
                return;
            }
            this.has_been_clicked = true;
            const description = document.getElementById('description');
            const diviseur = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
            const direction = Math.random() < 0.5 ? -1 : 1;
            setInterval(() => {
                this.position += 1;
                description.style.transform = `translateY(${this.position}px)`;
                description.style.transform += ` rotate(${this.position / diviseur * direction}deg)`;
            }, 5);
        },
        back() {
            this.$router.push({name: 'HomePage'});
        }
    }
}
</script>

<style scoped>

.img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}

.img-equal {
    display: flex;
    justify-content: center;
    align-items: center;
}

.description {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 80%;
    margin-left: 10%;
    font-size: 35px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 15px;
    font-weight: bold;
    cursor: pointer;
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

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 15px;
    padding: 20px 30px;
    cursor: pointer;
    height: 40px;
    margin-top: 20px;
    margin-left: 10px;
}

</style>