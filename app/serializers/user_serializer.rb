class UserSerializer < ActiveModel::Serializer
  attributes :id, :password, :username

  # Delegate the practical definition of `full_name` to
  # the User model, where it belongs, rather than
  # (re)defining it here.
  def username
    object.username
  end

end
