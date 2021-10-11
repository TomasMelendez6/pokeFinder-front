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
      //Llevo el scroll hacia arriba
      // let elmnt = document.getElementById("app");
      // elmnt.scrollIntoView();
      try{
        this.loading = true
        await this.$store.dispatch('updatePokemons')
        this.pokemonList = this.$store.state.pokemonList

        this.selectedPokemon = this.filterPokemon()

        console.log(this.selectedPokemon);

        let slides = [
          {
            id: 'slide-1',
            image: this.selectedPokemon.pic1
          },
          {
            id: 'slide-2',
            image: this.selectedPokemon.pic2
          }
        ]
        this.selectedPokemon.slides = slides

        this.loading = false
      }catch(error){
          console.log("ERROR GET: " + error)
      }
    },

    filterPokemon(){
      console.log("ENTRO AL FILTROO");
      let found = {}
      for (let i = 0; i < this.pokemonList.length; i++) {
        const element = this.pokemonList[i];
        console.log("ELEMENTO: ", element);
        if (element.id == this.id){
          console.log("ENCONTRE: ", element);
          found = element
        }
      }
      return found
    }
  }
}


