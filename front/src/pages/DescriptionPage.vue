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
            id: this.$route.params.id,
            title: '',
            description: '',
            image_left: '',
            image_right: ''
        }
    },
    mounted(){
        this.SetData();
    },
    methods: {
        SetData(){
            if (this.id == 1){
                this.title = 'Coeur';
                this.description = 'Le cœur est un organe musculaire creux qui assure la circulation du sang dans l\'organisme. Il est au centre du système circulatoire. Il est situé dans le thorax, entre les deux poumons, à hauteur du médiastin antérieur.';
                this.image_left = '@/assets/coeur.jpg';
                this.image_right = '@/assets/courant.jpg';
            }
            else if (this.id == 2){
                this.title = 'Courant';
                this.description = 'Un courant électrique est un déplacement d\'électrons dans un conducteur. Il est caractérisé par son intensité, sa tension et sa fréquence. Il est utilisé pour alimenter des appareils électriques.';
                this.image_left = '@/assets/poumon.jpg';
                this.image_right = '@/assets/photosynthèse.jpg';
            }else if (this.id == 3){
                this.title = 'Poumon';
                this.description = 'Le poumon est un organe pair, spongieux et élastique qui assure les échanges gazeux entre l\'air et le sang. Il est situé dans la cage thoracique, de part et d\'autre du cœur.';
                this.image_left = '@/assets/squelette.webp';
                this.image_right = '@/assets/corail.jpg';
            }else if (this.id == 4){
                this.title = 'Photosynthèse';
                this.description = 'La photosynthèse est un processus biochimique qui permet aux plantes vertes de synthétiser de la matière organique en utilisant l\'énergie lumineuse. Elle se déroule dans les chloroplastes des cellules végétales.';
                this.image_left = '@/assets/peau.jpg';
                this.image_right = '@/assets/water.jpg';
            }else if (this.id == 5){
                this.title = 'L\'ecosystem';
                this.description = 'Un écosystème est un ensemble formé par une communauté d\'êtres vivants et son environnement. Il est caractérisé par des interactions entre les organismes et leur milieu de vie.';
                this.image_left = '@/assets/systeme_im.png';
                this.image_right = '@/assets/ecosystem.png';
            }else if (this.id == 7){
                this.title = 'Reins et marée';
                this.description = 'Les reins sont des organes en forme de haricot qui assurent la filtration du sang et l\'élimination des déchets de l\'organisme. Ils sont situés dans la partie postérieure de l\'abdomen, de part et d\'autre de la colonne vertébrale.';
                this.image_left = '@/assets/microbiote.jpeg';
                this.image_right = '@/assets/plancton.webp';
            }else if (this.id == 6){
                this.title = 'Microbiote et plancton';
                this.description = 'Le microbiote est l\'ensemble des micro-organismes qui vivent en symbiose avec l\'organisme humain. Il est composé de bactéries, de virus et de champignons. Il joue un rôle essentiel dans la digestion, l\'immunité et la santé.';
                this.image_left = '@/assets/reins.jpg';
                this.image_right = '@/assets/maree.jpg';
            }
        }
    }
}
</script>

<style scoped>

.description {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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