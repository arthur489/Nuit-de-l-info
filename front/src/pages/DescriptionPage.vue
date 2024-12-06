<template>
    <BulleComponent />
    <button @click="back" class="button">
        Back
    </button>
    <div class="title">
        <h1 style="color:aliceblue">{{ title }}</h1>
    </div>
    <div class="img-equal">
        <img :src="require(`@/assets/${image_left}`)" class="img" />
        <img :src="require(`@/assets/${image_right}`)" class="img" />
    </div>
    <div class="description" @click="move" id="description">
        <p>{{ description }}</p>
    </div>
</template>

<script>
import BulleComponent from '@/component/BulleComponent.vue';

export default {
    components: {
        BulleComponent,
    },
    name: 'DescriptionPage',
    data() {
        return {
            description: localStorage.getItem('description'),
            image_left: localStorage.getItem('image_left'),
            image_right: localStorage.getItem('image_right'),
            title: localStorage.getItem('title'),
            position: 0,
            has_been_clicked: false
        };
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
            this.$router.push({ name: 'HomePage' });
        }
    }
};
</script>

<style scoped>
/* Images avec taille adaptable */
.img {
    width: 20vw;
    height: 20vw;
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
    object-fit: cover;
}

/* Conteneur d'images */
.img-equal {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin: 10px;
}

/* Description avec scrollbar */
.description {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    width: 90%;
    font-size: 1.2rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 15px;
    font-weight: bold;
    cursor: pointer;
    overflow: auto; /* Active les scrollbars */
    text-align: center;
    max-height: 300px; /* Définit une hauteur max pour activer le scroll */
}

/* Styles personnalisés pour la scrollbar */
.description::-webkit-scrollbar {
    width: 10px;
}

.description::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
}

.description::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 1);
}

.description::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
}

/* Titre centré */
.title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    text-align: center;
}

/* Bouton responsive */
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 15px;
    cursor: pointer;
    margin: 10px;
}

/* Responsive design */
@media (max-width: 768px) {
    .img {
        width: 40vw;
        height: 40vw;
    }

    .description {
        font-size: 1rem;
        padding: 10px;
    }

    .button {
        font-size: 0.9rem;
        padding: 8px 12px;
    }
}

@media (max-width: 480px) {
    .img {
        width: 60vw;
        height: 60vw;
    }

    .description {
        font-size: 0.9rem;
        padding: 8px;
    }

    .button {
        font-size: 0.8rem;
        padding: 6px 10px;
    }
}
</style>
