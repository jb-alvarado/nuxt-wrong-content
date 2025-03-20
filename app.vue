<template>
    <div>
        <NuxtRouteAnnouncer />
    </div>
</template>
<script setup>
onMounted(() => {
    setTimeout(() => {
        $fetch('/api/backend').then((data) => {
            console.log('---data', data)
        })
    }, 1000)
})


</script>
