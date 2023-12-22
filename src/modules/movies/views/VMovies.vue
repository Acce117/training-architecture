<script setup>
import Movies from '../models/movie.model';

const { movies } = Movies.getMovies();

</script>

<template>
    <h2>Movies</h2>
    <section>
        <ul>
            <div v-for="movie in movies" :key="movie.id">
                <li>
                    <h3>{{ movie.name }}</h3>
                </li>
            </div>
        </ul>
    </section>
</template>