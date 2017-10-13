class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    self.resource = warden.authenticate! auth_options
    sign_in resource_name, resource
    set_jwt_token
    render json: current_user
  end

  # DELETE /resource/sign_out
  def destroy
    sign_out current_user
    render json: {}
  end

  # overwrite devise method
  def verify_signed_out_user
  end

  protected

    def set_jwt_token
      payload = { user_id: resource.id }
      token = JWTWrapper.encode payload
      response.headers['authorization'] = "bearer #{token}"
    end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
