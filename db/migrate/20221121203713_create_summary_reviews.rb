class CreateSummaryReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :summary_reviews do |t|
      t.text :body, null: false

      t.belongs_to :user, null: false
      t.belongs_to :summary, null: false

      t.timestamps null:false
    end
  end
end
