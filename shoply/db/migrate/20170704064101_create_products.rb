class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products, id: :uuid do |t|
      t.boolean :active, default: true
      t.decimal :price, precision: 5, scale: 2
      t.string :name
      t.string :currency, default: "EUR"
      t.string :picture, null: true
      t.text   :description

      t.uuid :category_id, index: true 

      t.timestamps
    end
  end
end
