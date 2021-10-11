import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'pokemon-detail',
  components: { VueperSlides, VueperSlide },
  props: {
    id: String
  },
  data () {
    return {
      loading: false,
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
      pokemonList: [],
      selectedPokemon: {}

    }
  },
  computed: {

  },
  mounted () {
    this.getProductoPorId()
  },
  methods: {
    async getProductoPorId(){
      try{
        this.loading = true
        await this.$store.dispatch('updatePokemons')
        this.pokemonList = this.$store.state.pokemonList

        this.selectedPokemon = this.filterPokemon()

        let slides = [
          {
            id: 'slide-1',
            image: this.selectedPokemon.sprites.front_def
          },
          {
            id: 'slide-2',
            image: this.selectedPokemon.sprites.back_def
          },
          {
            id: 'slide-3',
            image: this.selectedPokemon.sprites.front_shiny
          },
          {
            id: 'slide-4',
            image: this.selectedPokemon.sprites.back_shiny
          }
        ]
        this.selectedPokemon.slides = slides

        this.loading = false
      }catch(error){
          console.log("ERROR GET: " + error)
      }
    },

    filterPokemon(){
      let found = {}
      for (let i = 0; i < this.pokemonList.length; i++) {
        const element = this.pokemonList[i];
        if (element.id == this.id){
          found = element
        }
      }
      return found
    }
  }
}


