class ArticlesController < ApplicationController
  # GET /articles.json
  def index
    @articles = Article.order(created_at: :desc).page(params[:page]).per(params[:per_page])
  end

  # GET /articles/1.json
  def show
    @article = Article.find(params[:id])
    render json: { article: @article }
  end

  # PATCH/PUT /articles/1.json
  def update
    @article = Article.find(params[:id])

    if @article.update(article_params)
      render json: { notice: '記事の更新に成功しました', location: article_path(@article) }, status: :ok
    else
      render json: { alert: @article.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # POST /articles.json
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: { notice: '記事の作成に成功しました' }, status: :created
    else
      render json: { alert: @article.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def article_params
    params.require(:article).permit(:name, :body)
  end
end
