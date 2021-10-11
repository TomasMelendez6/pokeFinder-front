import Vue from  'vue'
import VueRouter from 'vue-router'

import Pokemons from './components/Pokemons/index.vue'
import PokemonDetail from './components/PokemonDetail/index.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'hash',
    routes: [
        {path: '/', redirect: '/Inicio'},
        {path: '/Inicio', component: Pokemons},
        {path: '/PokemonDetail/:id', component: PokemonDetail, props: true}

    ]   
})
