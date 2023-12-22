<script setup>
import Series from '../models/series.model.js';

const { series } = Series.getSeries();

</script>

<template>
    <h2>Series</h2>
    <section>
        <ul>
            <div v-for="serie in series" :key="serie.id">
                <li>
                    <h3>{{ serie.name }}</h3>
                </li>
            </div>
        </ul>
    </section>
</template>