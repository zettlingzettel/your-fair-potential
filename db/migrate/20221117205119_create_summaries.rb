class CreateSummaries < ActiveRecord::Migration[5.2]
  def change
    create_table :summaries do |t|
      t.string :title, null: false
      t.text :body, null: false

      t.text :api_doi, null: false
      t.belongs_to :user, null: false

      t.timestamps null:false
    end
  end
end
