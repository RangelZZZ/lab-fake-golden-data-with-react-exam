const App = React.createClass({
    getInitialState: function () {
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
        this.setState(elements)
    },
    deleteElement: function (element) {
        const elements = this.state.elements;
        elements.splice(element, 1);
        this.setState(elements)
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div id="one">
            <div className="text-center">
                <button id="two" className="btn  btn-lg"
                        onClick={this.toggle}>{isEditor ? "preview" : "edit"}</button>
            </div>
            <div className={isEditor ? "" : "hidden"}>
                <Editor elements={this.state.elements} onAdd={this.addElement} ondelete={this.deleteElement}/>
            </div>
            <div className={isEditor ? "hidden" : ""}>
                <Preview elements={this.state.elements}/>
            </div>
        </div>
    }
})
const Editor = React.createClass({
    render: function () {
        return <div className="row">
            <Left elements={this.props.elements} ondelete={this.props.ondelete}/>
            <Right onAdd={this.props.onAdd}/>
        </div>
    }
});

const Left = React.createClass({
    delete: function (index) {
        this.props.ondelete(index);
    },
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index}>
                <div id="seven">
                    <label>
                        <input className="six" type={ele}/>
                    </label>
                    <button id="aa" onClick={this.delete.bind(this, index)}>-</button>
                </div>
            </div>
        });
        return <div className="col-lg-9">
            {elements}
        </div>
    }
});

const Right = React.createClass({
    add: function () {
        const element = $("input[name=element]:checked").val();
        this.props.onAdd(element)
    },
    render: function () {
        return <div className="col-lg-3">
            <form className="form-group">
                <div id="three">
                    <label>
                        <input className="size" type="radio" name="element" value="text"/>&nbsp;&nbsp;&nbsp;&nbsp;text
                    </label>
                </div>
                <div id="four">
                    <label>
                        <input className="size" type="radio" name="element" value="date"/>&nbsp;&nbsp;&nbsp;&nbsp; date
                    </label>
                </div>
                <div>
                    <button id="five" type="button" onClick={this.add} className="btn btn-default btn-lg center-block">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
                </div>
            </form>
        </div>
    }
});
const Preview = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index}>
                <input className="six" type={ele}/>
            </div>
        });
        return <div id="nine" className="text-center">
            <div className="elements">
                {elements}
            </div>
            <button className=" btn btn-lg center-block" id="eghit">submit</button>
        </div>
    }
});

ReactDOM.render(<App/>, document.getElementById('content'));