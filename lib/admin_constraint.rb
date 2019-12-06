
# jwt_refresh
class AdminConstraint
  include JWTSessions::Authorization

  def request_cookies
    puts "\033[42;30m#{@request.cookies}\033[0m"
    @request.cookies
  end

  def request_method
    @request.request_method
  end

  def matches?(request)
    begin
      @request = request
      authorize_by_access_cookie!
      User.find(payload['user_id']).permissions.roles.update
    rescue
      false
    end
  end

end
