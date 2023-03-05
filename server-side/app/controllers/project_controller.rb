class PortfolioController < AppController

    get '/hello' do
        "Our very first controller"
    end

    post '/portfolios/create' do
        begin
            todo = Todo.create( self.data(create: true) )
            json_response(code: 201, data: todo)
        rescue => e
            json_response(code: 422, data: { error: e.message })
        end
    end

    get '/portfolios' do
        todos = Todo.all
        json_response(data: todos)
    end


    get '/' do
        @todos = Todo.all.map { |todo|
          {
            todo: todo,
            badge: todo_status_badge(todo.status)
          }
        }
        @i = 1
        erb_response :todos
    end

    put '/portfolios/update/:id' do
        begin
            todo = Todo.find(self.todo_id)
            todo.update(self.data)
            json_response(data: { message: "portfolios updated successfully" })
        rescue => e
            json_response(code: 422 ,data: { error: e.message })
        end
    end

    delete '/portfolios/destroy/:id' do
        begin
            todo = Todo.find(self.todo_id)
            todo.destroy
            json_response(data: { message: "todo deleted successfully" })
        rescue => e
          json_response(code: 422, data: { error: e.message })
        end
    end


    private

    def data(create: false)
        payload = JSON.parse(request.body.read)
        if create
            payload["created_at"] = Time.now
        end
        payload
    end

    def todo_id
        params['id'].to_i
    end
    
    def todo_status_badge(status)
        case status
            when 'CREATED'
                'bg-info'
            when 'ONGOING'
                'bg-success'
            when 'CANCELLED'
                'bg-primary'
            when 'COMPLETED'
                'bg-warning'
            else
                'bg-dark'
        end
    end


end