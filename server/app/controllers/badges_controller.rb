class BadgesController < ApplicationController
  def index
    student = Student.find(params[:student_id])
    @badges = student.badges
    render json: @badges
  end

  def create
  end


end
