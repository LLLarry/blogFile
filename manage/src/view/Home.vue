<template>
    <div class="homeDiv">
        <Top />
        <Left />
        <main ref="main">
            <Nal v-if="$route.path !== '/home/index'" />
            <router-view :mainHeight="mainHeight" />
         </main>
    </div>
</template>

<script>
import Left from '../components/layout/Left'
import Top from '../components/layout/Top'
import Nal from '../components/Nav/Nav'
export default {
    data(){
        return {
            mainHeight: 0, //main的高度的0.55倍
        }
    },
    components: {
        Left,
        Top,
        Nal
    },
    mounted(){
         const mainEle= this.$refs.main.offsetHeight * 0.55
         this.mainHeight= mainEle
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


