<template>
    <div>
        <h1>
            Home Page
        </h1>
        <HelloComponent/>
        <ImageContainer/>
    </div>
</template>

<script>

import HelloComponent from '@/component/HelloComponent.vue';
import ImageContainer from '@/component/ImageContainer.vue';


export default {
    name: 'HomePage',
    components: {
        HelloComponent,
        ImageContainer
    }
}

</script>