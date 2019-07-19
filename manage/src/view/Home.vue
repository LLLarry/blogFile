<template>
    <div class="homeDiv">
        <Top />
        <Left />
        <main>
            <Nal v-if="$route.path !== '/home/index'" />
            <router-view />
         </main>
    </div>
</template>

<script>
import Left from '../components/layout/Left'
import Top from '../components/layout/Top'
import Nal from '../components/Nav/Nav'
export default {
    components: {
        Left,
        Top,
        Nal
    }
}
</script>

<style scoped>
.homeDiv main {
    position: absolute;
    left: 200px;
    top: 60px;
    right: 0;
    bottom: 0;
    background-color:rgba(0,0,0,.1);
    z-index: 1;
    overflow-y: auto;
}
</style>


