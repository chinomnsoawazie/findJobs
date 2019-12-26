class User < ApplicationRecord
    has_many :jobs
    has_many :preferences
    has_many :skills
    has_many :memberships
    has_many :employments
    has_many :certifications
    has_many :educations
    has_many :todos, through: :jobs
    has_many :notes, through: :jobs
end
