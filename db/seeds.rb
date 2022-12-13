# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(email: "email1@textemail.com", password: "secure_password")
summary1 = Summary.create(
  title: "Seven reasons to invest in well-being",
  body: "When the World Health Organization was founded, it defined health as “a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity” (Constitution of the World Health Organization, 1946)
  Individuals who are not ill are naturally motivated to act in ways that improve their wellbeing; they will strive toward happiness and success (e.g., Lyubomirsky, King, & Diener, 2005)
  Investigating how well-being affects and is affected by other important aspects of health and functioning has the potential to pave the way toward more effective prevention and intervention programs, as well as improvements in relationship, academic, and employment contexts
  By highlighting the value of promoting subjective well-being, it is our intention that researchers and investors alike will gravitate away from a primary focus on psychopathology and toward an interest in the factors that enhance well-being across the life span
  Include measures of subjective well- Measures of well-being are typically brief, assessment being in studies that easy to administer, and a focus on mental health outcomes
  ",
  api_doi: "10.1037/vio0000019",
  user_id: user1.id
  )

summary_review1 = SummaryReview.create(body: "Great summary!", user_id: user1.id, summary_id: summary1.id)
summary_review1 = SummaryReview.create(body: "Amazing summary!", user_id: user1.id, summary_id: summary1.id)

summary2 = Summary.create(
  title:"example", 
  body:"summary",
  api_doi:"example",
  user_id: user1.id
)