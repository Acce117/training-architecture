<template>
    <nav>
        <RouterLink to="/home/movies">Movies</RouterLink>
        <RouterLink to="/home/series">Series</RouterLink>
    </nav>
    <h1>
        Home
    </h1>
    
    <RouterView/>
</template>

<style scoped>
    a{
        margin-right: 10px;
    }
</style>