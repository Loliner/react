const NUMBER_OF_BLOCK = 300000;

class BlockList extends React.Component {
    render() {
        const elements = [];
        for (let i = 0; i < this.props.numberOfBlock; i++) {
            elements.push(
                <div style={{ width: 200, height: 50, marginBottom: 10, backgroundColor: 'yellow' }}>{this.props.displayNumber}</div>
            )
        }
        return elements;
    }
}

class ReactExample extends React.Component {
    constructor() {
        super();
        this.state = { timesOfButtonClicked: 0 };
    }

    _addTimesOfButtonClicked() {
        const { timesOfButtonClicked } = this.state;
        this.setState({timesOfButtonClicked: timesOfButtonClicked + 1});
        // ReactDOMFiber.unstable_deferredUpdates(() =>
        //     this.setState(state => { timesOfButtonClicked: timesOfButtonClicked + 1 })
        // );
    }

    render() {
        const { timesOfButtonClicked } = this.state;
        return (
            <div >
                <input type="text" />
                <button onClick={this._addTimesOfButtonClicked.bind(this)}>
                    Click Me
        </button>
                <BlockList
                    displayNumber={timesOfButtonClicked}
                    numberOfBlock={NUMBER_OF_BLOCK} />
            </div>
        )
    }
};

// 创建块元素列表组件，输入块元素的数量 NUMBER_OF_BLOCK_LIST，渲染出对应数量的块元素
ReactDOM.render(<ReactExample />, document.getElementById('root'));
// ReactDOMFiber.render(<ReactExample />, document.getElementById('root'));
