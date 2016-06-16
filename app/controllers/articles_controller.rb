class ArticlesController < ApplicationController
    # GET /articles.json
  def index
    @articles = Article.order(created_at: :desc).page(params[:page]).per(params[:per_page])
  end
end
