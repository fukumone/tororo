const Header = React.createClass({
    render: function() {
        return (
            <header>
                <h1><ReactRouter.Link to="index" >ReactSampleアプリケーション</ReactRouter.Link></h1>
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
    getInitialState: function() {
        return {alert: [], notice: null, flashShown: false}
    },
    noticeUpdateFlash: function(message) {
        this.setState({notice: message, flashShown: false})
    },
    componentWillReceiveProps(nextProps) {
        if (this.state.flashShown) {
            this.setState({ notice: null, flashShown: false })
        } else {
            this.setState({ flashShown: true })
        }
    },
    render: function() {
        let notice
        if (this.state.notice) {
            notice = (
                <div className="alert alert-success">
                    <ul><li>{this.state.notice}</li></ul>
                </div>
            )
        }
        return (
            <div>
                <Header />
                {notice}
                <ReactRouter.RouteHandler
                    alert={this.state.alert}
                    noticeUpdateFlash={this.noticeUpdateFlash}
                    />
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
