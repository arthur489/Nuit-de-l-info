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
            :description="item.description"
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
                    id: 1,
                    description: 'Le cœur et les courants marins partagent un rôle vital: ils assurent la circulation et le transport. Le cœur pompe le sang à travers le corps, apportant oxygène et nutriments aux cellules, tandis que les courants marins, tels que le Gulf Stream, déplacent l\'eau à travers les océans, régulant la température et distribuant des éléments essentiels aux écosystèmes marins. Tous deux sont essentiels pour maintenir l\'équilibre et la vie dans leurs systèmes respectifs.',
                },
                {
                    msg_left: 'Poumon',
                    msg_right: 'Photosynthèse',
                    image_left: 'poumon.jpg',
                    image_right: 'photosynthèse.jpg',
                    id: 2,
                    description: 'Les poumons humains et le processus de photosynthèse dans l\'océan jouent un rôle crucial dans la régulation de l\'oxygène. Tandis que les poumons captent l\'oxygène et évacuent le dioxyde de carbone, la photosynthèse réalisée par les plantes marines et le phytoplancton libère de l\'oxygène dans l\'eau, fournissant ainsi l\'air nécessaire à la vie marine et terrestre. Ces processus permettent la respiration sur Terre et dans les mers.'
                },
                {
                    msg_left: 'Squelette',
                    msg_right: 'Récif de corail',
                    image_left: 'squelette.webp',
                    image_right: 'corail.jpg',
                    id: 3,
                    description: 'Le squelette humain et les coraux sous-marins servent de structure fondamentale pour soutenir la vie. Le squelette humain offre un cadre rigide qui protège les organes internes et permet le mouvement, tout comme les coraux forment des structures solides, appelées récifs, qui abritent une biodiversité riche et offrent protection aux espèces marines. Ces deux éléments, en dépit de leur différence, soutiennent et stabilisent des écosystèmes complexes.'
                },
                {
                    msg_left: 'peau',
                    msg_right: "surface de l'eau",
                    image_left: 'peau.jpg',
                    image_right: 'water.jpg',
                    id: 4,
                    description: 'La peau humaine et la surface de l\'eau dans l\'océan partagent une fonction de protection. La peau agit comme une barrière pour protéger les organes internes des infections et des agressions extérieures, tandis que la surface de l\'eau protège l\'écosystème marin des rayons ultraviolets nocifs, régule la température et contrôle les échanges gazeux. Les deux jouent un rôle crucial dans la préservation de la vie en limitant les impacts externes.'
                },
                {
                    msg_left: 'systeme immunitaire',
                    msg_right: 'écosystème',
                    image_left: 'systeme_im.png',
                    image_right: 'ecosystem.png',
                    id: 5,
                    description: 'Le système immunitaire humain défend le corps contre les infections et les maladies en détectant et en éliminant les agents pathogènes. De la même manière, les écosystèmes marins, comme les récifs coralliens, protègent les océans en agissant comme une barrière contre les perturbations externes. Ils maintiennent l\'équilibre en filtrant les polluants et en régulant les populations d\'organismes marins, tout comme le système immunitaire régule la santé corporelle.'
                },
                {
                    msg_left: 'microbiote',
                    msg_right: 'plancton',
                    image_left: 'microbiote.jpeg',
                    image_right: 'plancton.webp',
                    id: 6,
                    description: 'Le microbiote humain, composé de milliards de bactéries et autres micro-organismes, joue un rôle essentiel dans la digestion, la protection contre les infections et l\'équilibre du corps. Dans l\'océan, le plancton, bien qu\'invisible à l\'œil nu, est essentiel pour l\'équilibre écologique en produisant de l\'oxygène et en constituant la base de la chaîne alimentaire marine. Les deux régulent leur environnement, favorisant la santé et la survie dans leur domaine respectif.'
                },
                {
                    msg_left: 'reins',
                    msg_right: 'marée',
                    image_left: 'rein.jpeg',
                    image_right: 'marée.jpg',
                    id: 7,
                    description: 'Les reins dans le corps humain filtrent le sang, éliminent les toxines et régulent l\'équilibre hydrique et électrolytique. De la même manière, la marée, causée par l\'attraction gravitationnelle de la lune et du soleil, influence les niveaux d\'eau dans les océans, nettoyant les zones côtières et apportant des nutriments. Les deux processus sont essentiels pour maintenir l’équilibre des systèmes naturels, en permettant une purification et une régulation continues.'
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