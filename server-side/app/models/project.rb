class Project < ActiveRecord::Base

    enum :status, [ :CREATED, :ONGOING, :COMPLETED, :CANCELLED ]

end
