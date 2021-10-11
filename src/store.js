import Vue from 'vue'
import Vuex from 'vuex'
import url from './urls.js' 
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        pokemonList: [],
        filteredPokemonList: [],
        loading: false

    },
    actions : {
        async updatePokemons({commit}){ 
            try{
                commit('pokemonLoading', true)
                if(this.state.pokemonList.length <= 0){
                    const data = await axios.get(url.url + url.urlPokemon + '/consultar')
                    commit('updatePokemons', data.data)
                }
                commit('pokemonLoading', false) 
            }catch(error){
                console.log("Error GET: " + error)
            }
        },

        updateFilteredPokemons({commit}, filteredPokemons){
            commit('updateFilteredPokemons', filteredPokemons)
        }
    },
    mutations : {
        updatePokemons(state, pokemonList){
            state.pokemonList = pokemonList
        },
        pokemonLoading(state, value){
            state.loading = value
        },
        updateFilteredPokemons(state, filteredPokemons){
            state.filteredPokemonList = filteredPokemons
        },
    }
})