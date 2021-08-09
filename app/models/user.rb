class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 8 }, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :accounts,
        foreign_key: :user_id,
        class_name: :Account

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        return nil if @user.nil?
        @user.check_password(password) ? @user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def check_password(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64(64)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(64)
    end
end