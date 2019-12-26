class Api::V1::ToDosController < ApplicationController
  def index
    to_dos = ToDo.all 
    render json: to_dos
  end

  def show
    to_do = ToDo.find(params[:id])
    render json: to_do
  end

  def create
    to_do = ToDo.create(note_params)
    if to_do.valid?
      render json: to_do
    else
      render json:{errors: to_do.errors.full_messages}
    end
  end

  def update
    to_do = ToDo.find(params[:id])
    if to_do.update(note_params)
      render json: to_do
    else
      render json: to_do.errors, status: :unprocessable_entity
  end

  def destroy
    ToDo.destroy(params[:id])
  end

  private

  def note_params
    params.require(:to_do).permit(:job_id, :task, :due_date, :done_status)
  end
end
