<template>
    <div style="display: flex; gap: 10px;">
        <button class="button" @click="$router.push('/podcast')" style="flex: 0;">
            Podcast
        </button>
        <div style="display: flex; justify-content: center; align-items: center; font-size: 60px; color: white; font-weight: 700; margin-left: 12%;">
            Cliquer sur les organes pour en savoir plus
        </div>
    </div>
    <canvas ref="canvas"></canvas>
    <div style = "display: flex; gap: 20px; justify-content: center; align-items: left; flex-direction: column; margin-left: 5%;margin-top: 5%">
        <EqualComponent :msg_left="list[index.Coeur].msg_left" :msg_right="list[index.Coeur].msg_right" :image_left="list[index.Coeur].image_left" :image_right="list[index.Coeur].image_right" :description="list[index.Coeur].description" :title="list[index.Coeur].title" v-if="list[index.Coeur].visible"/>
        <EqualComponent :msg_left="list[index.Poumon].msg_left" :msg_right="list[index.Poumon].msg_right" :image_left="list[index.Poumon].image_left" :image_right="list[index.Poumon].image_right" :description="list[index.Poumon].description" :title="list[index.Poumon].title" v-if="list[index.Poumon].visible"/>
        <EqualComponent :msg_left="list[index.Squelette].msg_left" :msg_right="list[index.Squelette].msg_right" :image_left="list[index.Squelette].image_left" :image_right="list[index.Squelette].image_right" :description="list[index.Squelette].description" :title="list[index.Squelette].title" v-if="list[index.Squelette].visible"/>
        <EqualComponent :msg_left="list[index.Peau].msg_left" :msg_right="list[index.Peau].msg_right" :image_left="list[index.Peau].image_left" :image_right="list[index.Peau].image_right" :description="list[index.Peau].description" :title="list[index.Peau].title" v-if="list[index.Peau].visible"/>
        <EqualComponent :msg_left="list[index['Systeme immunitaire']].msg_left" :msg_right="list[index['Systeme immunitaire']].msg_right" :image_left="list[index['Systeme immunitaire']].image_left" :image_right="list[index['Systeme immunitaire']].image_right" :description="list[index['Systeme immunitaire']].description" :title="list[index['Systeme immunitaire']].title" v-if="list[index['Systeme immunitaire']].visible"/>
        <EqualComponent :msg_left="list[index.Microbiote].msg_left" :msg_right="list[index.Microbiote].msg_right" :image_left="list[index.Microbiote].image_left" :image_right="list[index.Microbiote].image_right" :description="list[index.Microbiote].description" :title="list[index.Microbiote].title" v-if="list[index.Microbiote].visible"/>
        <EqualComponent :msg_left="list[index.Reins].msg_left" :msg_right="list[index.Reins].msg_right" :image_left="list[index.Reins].image_left" :image_right="list[index.Reins].image_right" :description="list[index.Reins].description" :title="list[index.Reins].title" v-if="list[index.Reins].visible"/>
        <EqualComponent :msg_left="list[index.Cerveau].msg_left" :msg_right="list[index.Cerveau].msg_right" :image_left="list[index.Cerveau].image_left" :image_right="list[index.Cerveau].image_right" :description="list[index.Cerveau].description" :title="list[index.Cerveau].title" v-if="list[index.Cerveau].visible"/>
    </div>

    <BulleComponent/>
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
            index : {"Coeur": 0, "Poumon": 1, "Squelette": 2, "Peau": 3, "Systeme immunitaire": 4, "Microbiote": 5, "Reins": 6, "Cerveau": 7},
            zones :[
                { shape: "circle", coords: [151, 65, 50], color: "rgba(0, 0, 0, 0.0)", name: "Cerveau" },
                { shape: "circle", coords: [30, 435, 50], color: "rgba(0, 0, 0, 0.0)", name: "Os" },
                { shape: "circle", coords: [270, 435, 50], color: "rgba(0, 0, 0, 0.0)", name: "Peau" },
                { shape: "rect", coords: [100, 300, 200,420], color: "rgba(0, 0, 0, 0.0)", name: "Intestins" },
                { shape: "rect", coords: [90, 170, 210,270], color: "rgba(0, 0, 0, 0.0)", name: "Poumons" },
            ],
            list: [
                {
                    title: 'Le cœur et les courants marins',
                    msg_left: 'Coeur',
                    msg_right: 'Courant',
                    image_left: 'coeur.jpg',
                    image_right: 'courant.jpg',
                    description: 'Le cœur et les courants marins partagent un rôle vital: ils assurent la circulation et le transport. Le cœur pompe le sang à travers le corps, apportant oxygène et nutriments aux cellules, tandis que les courants marins, tels que le Gulf Stream, déplacent l\'eau à travers les océans, régulant la température et distribuant des éléments essentiels aux écosystèmes marins. Tous deux sont essentiels pour maintenir l\'équilibre et la vie dans leurs systèmes respectifs.',
                    visible: false
                },
                {
                    title: 'Les poumons et la photosynthèse',
                    msg_left: 'Poumon',
                    msg_right: 'Photosynthèse',
                    image_left: 'poumon.jpg',
                    image_right: 'photosynthèse.jpg',
                    description: 'Les poumons humains et le processus de photosynthèse dans l\'océan jouent un rôle crucial dans la régulation de l\'oxygène. Tandis que les poumons captent l\'oxygène et évacuent le dioxyde de carbone, la photosynthèse réalisée par les plantes marines et le phytoplancton libère de l\'oxygène dans l\'eau, fournissant ainsi l\'air nécessaire à la vie marine et terrestre. Ces processus permettent la respiration sur Terre et dans les mers.',
                    visible: false
                },
                {
                    title: 'Le squelette et le récif de corail',
                    msg_left: 'Squelette',
                    msg_right: 'Récif de corail',
                    image_left: 'squelette.webp',
                    image_right: 'corail.jpg',
                    description: 'Le squelette humain et les coraux sous-marins servent de structure fondamentale pour soutenir la vie. Le squelette humain offre un cadre rigide qui protège les organes internes et permet le mouvement, tout comme les coraux forment des structures solides, appelées récifs, qui abritent une biodiversité riche et offrent protection aux espèces marines. Ces deux éléments, en dépit de leur différence, soutiennent et stabilisent des écosystèmes complexes.',
                    visible: false
                },
                {
                    title: 'La peau et la surface de l\'eau',
                    msg_left: 'peau',
                    msg_right: "surface de l'eau",
                    image_left: 'peau.jpg',
                    image_right: 'water.jpg',
                    description: 'La peau humaine et la surface de l\'eau dans l\'océan partagent une fonction de protection. La peau agit comme une barrière pour protéger les organes internes des infections et des agressions extérieures, tandis que la surface de l\'eau protège l\'écosystème marin des rayons ultraviolets nocifs, régule la température et contrôle les échanges gazeux. Les deux jouent un rôle crucial dans la préservation de la vie en limitant les impacts externes.',
                    visible: false 
                },
                {
                    title: 'Le système immunitaire et l\'écosystème',
                    msg_left: 'systeme immunitaire',
                    msg_right: 'écosystème',
                    image_left: 'systeme_im.png',
                    image_right: 'ecosystem.png',
                    description: 'Le système immunitaire humain défend le corps contre les infections et les maladies en détectant et en éliminant les agents pathogènes. De la même manière, les écosystèmes marins, comme les récifs coralliens, protègent les océans en agissant comme une barrière contre les perturbations externes. Ils maintiennent l\'équilibre en filtrant les polluants et en régulant les populations d\'organismes marins, tout comme le système immunitaire régule la santé corporelle.',
                    visible: false
                },
                {
                    title: 'Le microbiote et le plancton',
                    msg_left: 'microbiote',
                    msg_right: 'plancton',
                    image_left: 'microbiote.jpeg',
                    image_right: 'plancton.webp',
                    description: 'Le microbiote humain, composé de milliards de bactéries et autres micro-organismes, joue un rôle essentiel dans la digestion, la protection contre les infections et l\'équilibre du corps. Dans l\'océan, le plancton, bien qu\'invisible à l\'œil nu, est essentiel pour l\'équilibre écologique en produisant de l\'oxygène et en constituant la base de la chaîne alimentaire marine. Les deux régulent leur environnement, favorisant la santé et la survie dans leur domaine respectif.',
                    visible: false
                },
                {
                    title: 'Les reins et la marée',
                    msg_left: 'reins',
                    msg_right: 'marée',
                    image_left: 'rein.jpeg',
                    image_right: 'marée.jpg',
                    description: 'Les reins dans le corps humain filtrent le sang, éliminent les toxines et régulent l\'équilibre hydrique et électrolytique. De la même manière, la marée, causée par l\'attraction gravitationnelle de la lune et du soleil, influence les niveaux d\'eau dans les océans, nettoyant les zones côtières et apportant des nutriments. Les deux processus sont essentiels pour maintenir l’équilibre des systèmes naturels, en permettant une purification et une régulation continues.',
                    visible: false
                },
                {
                    title: 'Le cerveau et les océans',
                    msg_left: 'cerveau',
                    msg_right: 'océan',
                    image_left: 'cerveau.jpg',
                    image_right: 'ocean.jpg',
                    description: 'Le cerveau humain et l\'Océan partagent des caractéristiques fascinantes, notamment leur complexité et leur capacité à maintenir un équilibre dynamique. Le cerveau, avec ses milliards de neurones interconnectés, reçoit et traite une immense quantité d\'informations, régulant toutes les fonctions corporelles. Il crée des connexions, des réseaux et des processus cognitifs qui permettent à l\'individu de percevoir, penser et réagir au monde qui l\'entoure.De manière similaire, l\'Océan fonctionne comme un système de communication et de régulation complexe. Il est composé de réseaux de courants marins, de cycles d\'eau, et d\'interactions biologiques qui régulent la température, l\'humidité et les conditions climatiques mondiales. Comme le cerveau, l\'Océan réagit et s\'adapte aux changements externes, et toute perturbation de son équilibre (comme la pollution ou le réchauffement climatique) peut affecter l’ensemble du système, tout comme un dérèglement dans le cerveau peut perturber le corps humain. Ces deux systèmes, tout en étant immensément vastes et complexes, agissent en permanence pour maintenir un équilibre crucial pour la vie.',
                    visible: false
                }
                
            ]
        }
    },
    mounted() {
        this.drawZones();
    },
    methods: {
        displayGoodInfos(name){
            this.list.forEach((element) => {
                element.visible = false;
            });

            if (name === "Poumons") {
                this.list[this.index.Coeur].visible = true;
                this.list[this.index.Poumon].visible = true;
            } else if (name === "Os") {
                this.list[this.index.Squelette].visible = true;
            } else if (name === "Peau") {
                this.list[this.index.Peau].visible = true;
            } else if (name === "Intestins") {
                this.list[this.index['Systeme immunitaire']].visible = true;
                this.list[this.index.Microbiote].visible = true;
                this.list[this.index.Reins].visible = true;
            } else if (name === "Cerveau") {
                this.list[this.index.Cerveau].visible = true;
            }
        },

        drawZones() {
            const canvas = this.$refs.canvas;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            canvas.classList.add('img_middle_screen');
            img.src = require('@/assets/body.png');
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                this.zones.forEach(zone => {
                    ctx.beginPath();
                    if (zone.shape === 'circle') {
                        ctx.arc(zone.coords[0], zone.coords[1], zone.coords[2], 0, 2 * Math.PI);
                        canvas.addEventListener('click', (event) => {
                            const rect = canvas.getBoundingClientRect();
                            const x = event.clientX - rect.left;
                            const y = event.clientY - rect.top;
                            const dx = x - zone.coords[0];
                            const dy = y - zone.coords[1];
                            if (Math.sqrt(dx * dx + dy * dy) <= zone.coords[2]) {
                                event.preventDefault();
                                this.displayGoodInfos(zone.name);
                            }
                        });
                    } else if (zone.shape === 'rect') {
                        ctx.rect(zone.coords[0], zone.coords[1], zone.coords[2] - zone.coords[0], zone.coords[3] - zone.coords[1]);
                        canvas.addEventListener('click', (event) => {
                            const rect = canvas.getBoundingClientRect();
                            const x = event.clientX - rect.left;
                            const y = event.clientY - rect.top;
                            if (x >= zone.coords[0] && x <= zone.coords[2] && y >= zone.coords[1] && y <= zone.coords[3]) {
                                this.displayGoodInfos(zone.name);
                                return;
                            }
                        });
                    }
                    ctx.fillStyle = zone.color;
                    ctx.fill();
                });
            }
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
    gap: 0px;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
}

.img_middle_screen {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

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
    font-size: 1.5rem;
    font-weight: 700;
}

</style> 