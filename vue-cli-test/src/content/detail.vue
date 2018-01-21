<template>
    <div>
        <app-dheader></app-dheader>
        <app-dcont></app-dcont>
        <app-dfooter></app-dfooter>
    </div>
</template>

<script>

import dheader from './dheader';
import dfooter from './dfooter';
import dcont from './detailcont'

export default {
    components:{
        'app-dheader':dheader,
        'app-dfooter':dfooter,
        'app-dcont':dcont,
    }
}
</script>

<style>

</style>
