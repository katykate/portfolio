def choose
  puts "Do you like programming? Yes or no please."
  choice = gets.chomp
  if (choice.downcase == "yes")
    puts "That\'s great!"
  elsif (choice.downcase == "no")
    puts "That\'s too bad!"
  else
    puts "That wasn\'t a yes or no."
  end
end
choose