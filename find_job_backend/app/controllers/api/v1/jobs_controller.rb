class Api::V1::JobsController < ApplicationController
  def index
    jobs = Job.all 
    render json: jobs
  end

  def show
    job = Job.find(params[:id])
    render json: job
  end

  def create
    job = Job.create(job_params)
    if job.valid?
      render json: job
    else
      render json:{errors: job.errors.full_messages}
    end
  end

  def update
    job = Job.find(params[:id])
    if job.update(job_params)
      render json: job
    else
      render json: job.errors, status: :unprocessable_entity
  end

  def destroy
    Job.destroy(params[:id])
  end

  private

  def job_params
    params.require(:job).permit(:user_id, :job_title, :company_name, :country, :state, :city, :zipcode, :pay, :type, :intro, :requirement, :employer_strongpoints, :benefits, :education, :schedule, :description, :duties, :url, :industry, :applied_key, :favorited_key)
  end
end
