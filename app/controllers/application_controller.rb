class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  include JWTSessions::RailsAuthorization
  rescue_from JWTSessions::Errors::Unauthorized, with: :not_authorized

  def index
    render template: 'layouts/application'
  end

  def current_user
    @current_user ||= User.find(payload["user_id"])
  end

  private

  def not_authorized
    render json: { error: "Not authorized" }, status: :unauthorized
  end

  # def refuse
  #   render json: { error: "Not authorized" }, status: 403
  # end
end
