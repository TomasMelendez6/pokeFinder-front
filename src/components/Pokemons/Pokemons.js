import vPagination from 'vue-plain-pagination'

export default {
  name: 'pokemons',
  components: { vPagination },
  props: [],
  data () {
    return {
      selected: '',
      pokemonList: [],
      pokemonListComplete: [],
      filtered: false,
      currentPage: 1,
      showPagination: false,
      totalPages: 1,
      bootstrapPaginationClasses: {
        ul: 'pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link'
      },
      paginationAnchorTexts: {
        first: 'First',
        prev: '<-',
        next: '->',
        last: 'Last'
      },
    }
  },
  computed: {
    filteredList() {
      return this.pokemonListComplete.filter(pokemon => {
        this.filtered = true
        return pokemon.name.includes(this.selected.toLowerCase())
      })
    },

    getItems() {
      if(this.selected === ''){
      if(this.filtered){
        this.pokemonList = this.pokemonListComplete
        this.setPokemonList([])
      }
      let aux = this.paginator(this.pokemonList)
      return aux
    }
    else{
      let auxList = this.filteredList
      this.setPokemonList(auxList)
      return this.paginator(auxList)
    }

  },

  },
  mounted () {
    this.get()
  },
  methods: {
    // metodo que trae todos los productos
    async get() {
      await this.$store.dispatch('updatePokemons')
      this.pokemonListComplete = this.$store.state.pokemonList
      this.pokemonList = this.pokemonListComplete
    },

    setPokemonList(value){
      this.$store.dispatch('updateFilteredPokemons', value)
    },

    paginator(arr){
      let arrResult = arr
      if(arr.length <= 12){
        this.showPagination = false
      }
      else{
        arrResult = arr.slice((this.currentPage - 1) * 12, (this.currentPage) * 12)
        this.showPagination = true
      }
      if(this.selected !== ''){
        this.currentPage = 1

      }
      this.getTotalPages(arr)
      return arrResult
    },

    getTotalPages(arr){
      let total = (arr.length) / 12
      if((total >= 0.0) && (Math.floor(total) === total)){
        this.totalPages = total
      }
      else{
        this.totalPages = Math.floor(total)+1
      }
    },

    // metodo que me lleva a la vista del detalle de un producto especifico
    pokemonDetail(id){
      this.$router.push({path: `/PokemonDetail/${id}`})
    },
  }
}


