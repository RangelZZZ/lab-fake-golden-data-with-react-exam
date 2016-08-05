const App = React.createClass({
    getInitaialState: function () {
        return {
            isEditor: true,
            elements: []
        }
    },
    toggle: function () {

        this.setState({
            isEditor: !this.state.isEditor
        })
    },
    addElement: function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState(elements);
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor ? "Preview" : "edit"}</button>
            <div className={isEditor ? "" : "hidden"}>
                <Editor elements={this.state.elements} onAdd={this.addElement}/>
            </div>
            <div className={isEditor ? "hidden" : ""}>
                <Preview/>
            </div>
        </div>
    }
})
const Editor = React.createClass({
    render: function () {
        return <div>
            <Left elements={this.props.elements}/>
            <Right onAdd={this.props.elements}/>
        </div>
    }
});
const Left = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index}>
                <input type={ele}/>
                <button>-</button>

            </div>

        });
        return <div>
            {elements}
        </div>
    }
})
const Right = React.createClass({
    add:function () {
        const elements = $("input [name=element]:checked").val();
        this.props.onAdd(element);
    },
  render: function(){
    return <div>
        <input type="radio" name="elements" value="text"/>text
        <input type="radio" name="elements" value="date"/>date
        <button onClick={this.add}></button>
    </div>
  }
})
const Preview = React.createClass({
    render: function () {
        return <div></div>
    }
})