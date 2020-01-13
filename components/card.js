class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image: "",
            height:0,
            weight:0
        }
    }

    

    async loadDetails() {
        const response = await fetch(this.props.uri)
        const json = await response.json()
        console.log(json.sprites.front_default)
        this.setState({image: json.sprites.front_default})
        this.setState({height: json.height})
        this.setState({weight: json.weight})


    }

    componentDidMount() {
        // console.log(this.props.uri)
        this.loadDetails()
    }

    render() {
        return (
            <div className="card">
                <div>{this.props.name}</div>
                <div><img src={this.state.image}/></div>
                <div>
                    Height: {this.state.height}<br/>
                    Weight: {this.state.weight}
                </div>
                <div><button>Catch!</button></div>
            </div>
        );
    }
}