100.times do 
  user_name = Faker::GameOfThrones.character
  age = Faker::Number.number(2)
  hobbies = Faker::Hipster.words(4, true, true)
  avatar = Faker::Avatar.image(user_name, '50x50', 'png', 'set1')
  Profile.create(user_name: user_name, age: age, hobbies: hobbies, avatar: avatar)
end