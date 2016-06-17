const ArticleEdit = React.createClass({
    getInitialState: function() {
        return { }
    },
    componentDidMount: function() {
        $.ajax({
            url: `/articles/${this.props.params.id}.json`,
            method: 'GET',
            success: (data) => {
                this.setState({ article: data })
            }
        })
    },
    render() {
        let form
        if (this.state.article) {
            form = <ArticleForm
                        action={`/articles/${this.props.params.id}.json`}
                        method="PATCH"
                        submit="Update"
                        article={this.state.article['article']}
                        noticeUpdateFlash={this.props.noticeUpdateFlash} />
        }
        return (
            <div>
                <h1>記事編集</h1>
                {form}
                <ReactRouter.Link to="index" className="btn btn-default">Back</ReactRouter.Link>
            </div>
        )
    }
})
