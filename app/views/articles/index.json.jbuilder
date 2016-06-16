json.articles do
  json.array!(@articles) do |article|
    json.extract! article, :id, :name, :body
    json.created_at article.created_at.strftime('%Y-%m-%d %H:%M')
    json.updated_at article.updated_at.strftime('%Y-%m-%d %H:%M')
    json.url article_url(article, format: :json)
  end
end
