
class AppController < Sinatra::Base

    configure do
      enable :cross_origin
    end
  
    before do
      response.headers['Access-Control-Allow-Origin'] = '*'
    end
  
    options "*" do
      response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
      response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
      response.headers["Access-Control-Allow-Origin"] = "*"
      200
    end

    def json_response(code: 200, data: nil)
      status = [200, 201].include?(code) ? "SUCCESS" : "FAILED"
      headers['Content-Type'] = 'application/json'
      if data
        [ code, { data: data, message: status }.to_json ]
      end
    end
  
    def error_response(code, e)
      json_response(code: code, data: { error: e.message })
    end
  
    def erb_response(file)
      headers['Content-Type'] = 'text/html'
      erb file
    end
  
    def not_found_response
      json_response(code: 404, data: { error: "You seem lost. That route does not exist." })
    end
  
    not_found do
      not_found_response
    end
  
  
  end
  