class Api::V1::SessionController < ApplicationController
  before_action :authorize_refresh_request!, only: [:refresh]
  before_action :authorize_access_request!, only: [:destroy]

  def create
    user = User.find_by!(name: params[:name]&.gsub(/\s*/, ''))
    if user.authenticate(params[:password])
      payload = { user_id: user.id }
      session = JWTSessions::Session.new(payload: payload, refresh_payload: payload, refresh_by_access_allowed: true)
      render json: { code: 0, data: session.login.merge(user_info: user.user_info) }
    else
      render json: "Invalid user", status: :unauthorized
    end
  end

  def refresh
    payload = { user_id: current_user.id }
    session = JWTSessions::Session.new(payload: payload, refresh_payload: payload, refresh_by_access_allowed: true)
    render json: { code: 0, data: session.refresh(found_token).merge(user_info: current_user.user_info) }
  end

  def destroy
    session = JWTSessions::Session.new(payload: payload)
    session.flush_by_access_payload
    render json: { code: 0 }
  end
end
