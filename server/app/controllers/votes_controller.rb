class VotesController < ApplicationController
  def create
    badge = params[:badge_id]
    vote = Vote.create!(value: params[:vote][:value]) #probably not :value
    badge << vote
    render json: vote, status: :created, location: vote

  end
end
