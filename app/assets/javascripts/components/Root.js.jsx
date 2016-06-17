const Header = React.createClass({
    render: function() {
        return (
            <header>
                <h1>ReactSampleアプリケーション</h1>
                <hr/>
            </header>
        )
    }
})

const Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <hr/>
                <p><a href="https://github.com/fukumone">fukumone</a></p>
            </footer>
        )
    }
})

const LayoutTemplate = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <ReactRouter.RouteHandler flash={FlashMessage}/>
                <Footer />
            </div>
        )
    }
})

const NotFound = React.createClass({
  render: function() {
    return (
      <h2>Not Found</h2>
    )
  }
})

$(() => {
    let routes = (
        <ReactRouter.Route path="/" handler={LayoutTemplate}>
            <ReactRouter.DefaultRoute name="index" handler={ArticlesIndex} />
            <ReactRouter.Route name="new" path="/article/new" handler={ArticleNew} />
            <ReactRouter.Route name="edit" path="/article/:id/edit" handler={ArticleEdit} />
            <ReactRouter.NotFoundRoute handler={NotFound} />
        </ReactRouter.Route>
    )
    ReactRouter.run(routes, ReactRouter.browserHistory, (Handler, state) => {
        ReactDOM.render(<Handler {...state}/>, document.getElementById('content'))
    })
})
