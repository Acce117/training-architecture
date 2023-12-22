import { ref } from "vue"
import seriesJson from '../data/series.json'

class Series{
    static getSeries = ()=>{
        let series = ref([]);

        setTimeout(()=>{
            series.value = seriesJson;
        }, 1000)

        return {
            series
        }
    }
}

export default Series;