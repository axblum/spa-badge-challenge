# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Student.create(name: "E-Money" )
Student.create(name: "Armani Exchange")
Student.create(name: "Paul Blart")
Student.create(name: "Jaredeeeeee")
Student.create(name: "Shambhaveeeee")
Student.create(name: "Meeeeee")

Badge.create(title: "Most Money", student_id: 1)
Badge.create(title: "Most fashionable", student_id: 2)
Badge.create(title: "Most CSS", student_id: 3)
Badge.create(title: "On campus the least", student_id: 4)
Badge.create(title: "Sublime Wizardry", student_id: 4)
Badge.create(title: "Most likely to repeat phase 1", student_id: 5)


Vote.create(value: 1, badge_id: 1)
Vote.create(value: 1, badge_id: 1)
Vote.create(value: 1, badge_id: 1)
Vote.create(value: 1, badge_id: 2)
Vote.create(value: 1, badge_id: 3)
Vote.create(value: 1, badge_id: 4)
Vote.create(value: -1, badge_id: 1)
Vote.create(value: -1, badge_id: 2)
Vote.create(value: -1, badge_id: 3)
Vote.create(value: -1, badge_id: 4)
Vote.create(value: -1, badge_id: 5)

