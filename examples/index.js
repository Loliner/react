class List extends React.Component {

    constructor() {
        super();
        this.state = {
            list: [
                { id: 1, name: 'Loliner'},
                { id: 2, name: 'Jack'},
                { id: 3, name: 'Happy'},
            ],
        };
    }

    

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(function (item, index, arr) {
                        // return <Item key={item.id} name={item.name} ></Item>;
                        return <Item key={item.id} info={item} ></Item>;
                    })}
                </ul>
                <button onClick={() => {
                    // 如果只是这样改变，那么子组件的 this.props.info === list[2] 是 true
                    // 所以在子组件的 shouldComponentUpdate 中 this.props.info.name === nextProps.info.name 是 true
                    // 所以虽然改变了 state，但是子组件没有触发渲染
                    // let list = this.state.list;
                    // list[2].name = 'OK';

                    // 所以我们必须考虑将 list[2] 设置为一个全新的对象
                    // 但实际的业务会更复杂，为了不考虑那么多，我们直接深拷贝一个新的 list
                    // 此时就会造成内存的冗余，因为 list[0] 和 list[1]是完全一样的
                    // 所以就需要到 immutable.js
                    let list = [
                        { id: 1, name: 'Loliner'},
                        { id: 2, name: 'Jack'},
                        { id: 3, name: 'OK'},
                    ];

                    this.setState({ list });
                }}>修改 list 其中一项的属性值</button>
            </div>
        )
    }
};

class Item extends React.Component {
    constructor() {
        super();
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        if (this.props.info.id != nextProps.info.id) {
            return true;
        } else if (this.props.info.name != nextProps.info.name) {
            return true;
        }
        return false;
    }

    render() {
        console.log(this.props.info.name);
        return <li>{this.props.info.name}</li>;
    }
}

ReactDOM.render(<List />,
    document.getElementById("root")
);