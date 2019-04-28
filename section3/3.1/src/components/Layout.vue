<template>
    <b-container class="bv-example-row">
        <b-row class="mb-3">
            <b-col sm="8" class="p-3 bg-        ">1 of 3</b-col>
            <b-col sm="4" class="ml-auto p-3 bg-info">2 of 3</b-col>
        </b-row>

        <b-row>
            <b-col md="4" order="1">1 of 3</b-col>
            <b-col md="4" offset-md="4" order="2">2 of 3</b-col>
            <!-- <b-col sm order="1">3 of 3</b-col> -->
        </b-row>
    </b-container>
</template>
<script>
export default {
    name: 'Layout'
}
</script>
<style scoped>
.bv-example-row .row>[class^="col"]  {
    padding-top: .75rem;
    padding-bottom: .75rem;
    background-color: azure;
    border: 1px solid gray;
}
</style>
