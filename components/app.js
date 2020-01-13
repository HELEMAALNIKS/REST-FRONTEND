class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <PokeDex />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, window.root);