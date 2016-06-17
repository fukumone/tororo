const ArticleNew = React.createClass({
    render() {
        return (
            <div>
                <h1>記事新規作成</h1>
                <ArticleForm
                    action="/articles.json"
                    method="POST"
                    submit="Create"
                    noticeUpdateFlash={this.props.noticeUpdateFlash} />
                <ReactRouter.Link to="index" className="btn btn-default">Back</ReactRouter.Link>
            </div>
        )
    }
})
