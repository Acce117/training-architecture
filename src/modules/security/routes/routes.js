import VHome from '/src/layouts/home/Home.vue';
import moviesRoutes from '/src/modules/movies/routes/routes';
import seriesRoutes from '/src/modules/series/routes/routes';
const routes = [
    {
        path: '/home',
        component: VHome,
        children: [
            ...moviesRoutes,
            ...seriesRoutes
        ]
    }
];

export default routes;