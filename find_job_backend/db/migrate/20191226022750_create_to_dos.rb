class CreateToDos < ActiveRecord::Migration[6.0]
  def change
    create_table :to_dos do |t|
      t.belongs_to :job, null: false, foreign_key: true
      t.string :task
      t.date :due_date
      t.boolean :done_status

      t.timestamps
    end
  end
end
