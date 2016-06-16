const ArticleForm = React.createClass({
    getInitialState: function() {
        return {name: '', body: '', alert: [], notice: []}
    },
    handleSubmit: function(e) {
        e.preventDefault()

        let params = {}

        Object.keys(this.refs).forEach((key) => {
            params[key] = ReactDOM.findDOMNode(this.refs[key]).value
        })

        $.ajax({
            url: this.props.action,
            method: this.props.method,
            data: { article: params },
            success: function(data) {
                this.setState({data: data})
                // 調査
                this.context.router.transitionTo("/")
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({alert: xhr.responseJSON['alert']})
                console.error(status, err.toString())
            }.bind(this)
        })
    },
    render() {
        let alerts
        let article = this.props.article
        if (this.state.alert.length > 0) {
            alerts = (
                <div className="alert alert-danger">
                    <ul>{this.state.alert.map((e, i) => <li key={i}>{e}</li>)}</ul>
                </div>
            )
        }
        return (
            <div>
                {alerts}
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">名前</label>
                         <div className="col-sm-10">
                            <input ref="name"
                                   className="form-control"
                                   defaultValue={article ? article.name : null} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">本文</label>
                        <div className="col-sm-10">
                            <input ref="body"
                                   className="form-control"
                                   defaultValue={article ? article.body : null} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-primary">{this.props.submit}</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
})

// 調査
ArticleForm.contextTypes = { router: React.PropTypes.func }
