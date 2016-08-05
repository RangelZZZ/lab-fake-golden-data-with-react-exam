const App = React.createClass({
  render: function(){
    return <div>
        <Editor/>
    </div>
  }
})
const Editor = React.createClass({
  render: function(){
    return <div></div>
  }
});
const Preview = React.createClass({
  render: function(){
    return <div></div>
  }
})

ReactDOM.render(<App/>, document.getElementById('content'));