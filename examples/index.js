class App extends React.Component {

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom);
    }
    render() {
        return (
            <h1>Hello React!</h1>
        );
    }
}

const ref = ReactDOM.render(<App />, document.getElementById('root'));
console.log(ref);