<template>
    <div class="classifcation">
        <app-cfmenu></app-cfmenu>
        <app-cfmcont></app-cfmcont>
    </div>
</template>
<style>
    .classifcation{
        
        overflow: hidden;
    }
</style>
<script>
    import cfmenu from './CFmenu.vue';
    import cfmcont from './CFcont.vue';
    export default {
        components: {
            'app-cfmenu':cfmenu,
            'app-cfmcont':cfmcont,
        }
    };
</script>
