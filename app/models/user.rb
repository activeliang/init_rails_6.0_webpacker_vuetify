class User < ApplicationRecord
  has_secure_password
  validates :name, presence: { message: '用户名不能为空' },
                 uniqueness: { message: '此用户名已存在' },
                 format: { without: /\s/, message: '用户名不能有空格' }

  def user_info
    data = slice(:name, :id)
  end
end
