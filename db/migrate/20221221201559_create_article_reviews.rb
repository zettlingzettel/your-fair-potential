class CreateArticleReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :article_reviews do |t|
      t.text :body, null: false
      t.text :api_doi, null: false

      t.belongs_to :user, null: false

      t.timestamps null:false
    end
  end
end