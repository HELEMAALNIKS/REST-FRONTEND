class PokeDex extends React.Component {
    constructor() {
        super()
        this.state = { 
            pokemon: []
        }
    }
    componentDidMount() {
        this.loadPokemon()
    }

    async loadPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=6000`)
        const json = await response.json()
        // console.log(json.results)
        this.setState({pokemon: json.results})
    }


    render() {
        let thumbs = this.state.pokemon.map((singlepokemon, i) =>
            <Card key={i} name={singlepokemon.name} uri={singlepokemon.url}/>
        )

        return (
            <div className="pokedex">
                <div>
                    <button>Load next 9 Pokémon</button>
                </div>
                <div>
                    Caught: 0
                </div>
                <div className="thumbnails">
                    {thumbs}
                </div>
            </div>
        )   
    }
}