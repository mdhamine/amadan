<template>
    <div class="bg-white">
    <div class="rounded-b-3xl bg-gradient-to-tr from-blue-800 via-sky-500 to-blue-400 h-16 w-full ">
    <span class="flex justify-center font-bold text-3xl text-white py-3">{{name}}</span>
    </div>
    </div>
</template>

<script>
    import { name } from './info';

export default{
    data() {
        return {
            name: name,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>