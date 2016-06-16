class ArticlesController < ApplicationController
    # GET /articles.json
  def index
    @articles = Article.order(created_at: :desc).page(params[:page]).per(params[:per_page])
  end

  # GET /articles/new
  def new
    @article = Article.new
    render :index
  end

  # POST /articles
  # POST /articles.json
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: { notice: '記事の作成に成功しました', location: article_path(@article) }, status: :created
    else
      render json: @article.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def article_params
    params.require(:article).permit(:name, :body)
  end
end
