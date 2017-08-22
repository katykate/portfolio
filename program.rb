
# Exercise 3.1.

=begin my_name = "Kate"
puts "hello"
p "hello"
def greeting(my_name) # here we say def to define a method and put the name of our method
  p "hello"  + " " + my_name # here’s the code inside our method
end # and here we end or close our method
# greeting("Tim")
greeting(my_name)
=end

# Exercise 3.1
def greeting
  puts "Please enter your name:"
  name = gets.chomp
  puts "Hello" + " " + name
end
greeting


