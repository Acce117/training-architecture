<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const login = ()=>{
    router.push('/home');
}
</script>

<template>
    <section>
        <form action="">
            <div>
                <input type="text" placeholder="username">
                <input type="password" placeholder="password">
                <button type="button" @click="login">Log in</button>
            </div>
        </form>
    </section>
</template>

<style scoped>
section {
    align-items: center;
    margin-top: 150px;
}

section,
form,
div{
    display: flex;
    flex-direction: column;
}

form {
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px 10px;
    width: 15rem;
}

input {
    margin-bottom: 20px;
}
div{
    margin: 0 20px;
    align-items: baseline;
}


</style>
