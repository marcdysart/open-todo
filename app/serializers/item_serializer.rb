class ItemSerializer < ActiveModel::Serializer
  attributes :description, :list_id, :completed, :id

end
