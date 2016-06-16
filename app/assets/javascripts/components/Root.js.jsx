$(() => {
    let routes = (
        <ReactRouter.Route path="/">
            <ReactRouter.DefaultRoute name="index" handler={ArticlesIndex}/>
            <ReactRouter.Route path="/article/new" name="new" handler={ArticleNew}/>
        </ReactRouter.Route>
    )
    ReactRouter.run(routes, ReactRouter.HistoryLocation, (Handler, state) => {
        ReactDOM.render(<Handler {...state}/>, document.getElementById('content'))
    })
})
