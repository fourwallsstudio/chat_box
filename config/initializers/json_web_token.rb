module Devise
  module Strategies
    class JsonWebToken < Base
      def valid?
        request.headers['authorization'].present?
      end

      def authenticate!
        return fail! unless claims
        return fail! unless claims.has_key?('user_id')

        success! User.find_by_id claims['user_id']
      end

      protected

        def claims
          strategy, token = request.headers['authorization'].split(' ')

          return nil if (strategy || '').downcase != 'bearer'

          JWTWrapper.decode(token) rescue nil
        end
    end
  end
end
