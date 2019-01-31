<template>
    <v-btn
            fab
            bottom
            right
            color="deep-purple"
            dark
            fixed
            @click="onNewAd"
    >
        <v-icon>add</v-icon>
    </v-btn>
</template>

<script>
    export default {
        methods: {
            onNewAd() {
                this.$store.commit('changeNewAd', true);
            }
        }
    }
</script>

<style scoped>

</style>