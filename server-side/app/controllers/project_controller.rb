class ProjectController < AppController

    #shows a welcome message
    get '/hello' do
        "Welcome to our first controller"
    end

    #Adds new data to the DB
    post '/projects/create' do
        begin
            project = Project.create( self.data(create: true) )
            json_response(code: 201, data: project)
        rescue => e
            json_response(code: 422, data: { error: e.message })
        end
    end

    #Display's all projects
    get '/projects' do
        projects = Project.all
        json_response(data: project)
    end


    get '/' do
        @projects = Project.all.map { |project|
          {
            project: project,
            badge: project_status_badge(project.status)
          }
        }
        @i = 1
        erb_response :projects
    end

    #Updates existing data according to its :id
    put '/projects/update/:id' do
        begin
            project = Project.find(self.project_id)
            project.update(self.data)
            json_response(data: { message: "projects updated successfully" })
        rescue => e
            json_response(code: 422 ,data: { error: e.message })
        end
    end

    #Delete's data based on its :id
    delete '/projects/destroy/:id' do
        begin
            project = Project.find(self.project_id)
            project.destroy
            json_response(data: { message: "project deleted successfully" })
        rescue => e
          json_response(code: 422, data: { error: e.message })
        end
    end


    private

    #format body data
    def data(create: false)
        payload = JSON.parse(request.body.read)
        if create
            payload["created_at"] = Time.now
        end
        payload
    end

    # @helper: retrieve data :id
    def project_id
        params['id'].to_i
    end

    #format status style
    def project_status_badge(status)
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