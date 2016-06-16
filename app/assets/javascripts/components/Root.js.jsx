const NotFound = React.createClass({
  render: function() {
    return (
      <h2>Not Found</h2>
    )
  }
})

$(() => {
    let routes = (
        <ReactRouter.Route path="/">
            <ReactRouter.DefaultRoute name="index" handler={ArticlesIndex}/>
            <ReactRouter.Route name="new" path="/article/new" handler={ArticleNew}/>
            <ReactRouter.Route name="edit" path="/article/:id/edit" handler={ArticleEdit}/>
            <ReactRouter.NotFoundRoute handler={NotFound} />
        </ReactRouter.Route>
    )
    ReactRouter.run(routes, ReactRouter.HistoryLocation, (Handler, state) => {
        ReactDOM.render(<Handler {...state}/>, document.getElementById('content'))
    })
})
