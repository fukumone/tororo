const ArticlesIndex = React.createClass({
    getInitialState: function() {
        return {articles: []}
    },
    fetchArticles: function(articles) {
        $.ajax({
            url: '/articles.json',
            dataType: 'json',
            data: articles,
            success: (data) => {
                this.setState({
                    articles: data.articles
                })
            },
            error: (xhr, status, err) => {
                console.error(status, err.toString())
            }
        })
    },
    componentDidMount: function() {
        this.fetchArticles()
    },
    render: function() {
        return (
            <div className="articleIndex">
                <h1>記事一覧</h1>
                <h3><ReactRouter.Link to="new" className="btn btn-default">新規作成</ReactRouter.Link></h3>
                <ArticleIndexTable articles={this.state.articles}/>
            </div>
        )
    }
})

const ArticleIndexTable = React.createClass ({
    render() {
        let articleNodes = this.props.articles.map((article, i) => {
            return (
                <tr>
                    <td>{article.id}</td>
                    <td><ReactRouter.Link to="edit" params={{ id: article.id }}>{article.name}</ReactRouter.Link></td>
                    <td>{article.body}</td>
                    <td>{article.created_at}</td>
                    <td>{article.updated_at}</td>
                </tr>
            )
        })

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Body</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th colSpan="3"></th>
                    </tr>
                </thead>
                <tbody>
                    {articleNodes}
                </tbody>
            </table>
        )
    }
})
