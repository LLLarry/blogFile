<template>
    <div class="homeDiv">
        <Top />
        <Left />
        <main>
            main
        </main>
    </div>
</template>

<script>
import Left from '../components/layout/Left'
import Top from '../components/layout/Top'
export default {
    components: {
        Left,
        Top
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
}
</style>


