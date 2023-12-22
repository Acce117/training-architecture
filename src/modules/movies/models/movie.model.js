import { reactive, ref } from "vue"
import moviesJson from '../data/movies.json'

class Movies{
    static getMovies = ()=>{
        let movies = ref([]);

        setTimeout(()=>{
            movies.value = moviesJson;
        }, 1000)

        return {
            movies
        }
    }
}

export default Movies;