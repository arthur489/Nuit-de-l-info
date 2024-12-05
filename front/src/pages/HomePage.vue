<template>
    <div>
        <h1>
            Home Page
        </h1>
        <HelloComponent/>
    </div>
</template>

<script>

import HelloComponent from '@/component/HelloComponent.vue';


export default {
    name: 'HomePage',
    components: {
        HelloComponent
    }
}

</script>