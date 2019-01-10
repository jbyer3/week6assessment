// Write a program that takes an input string and determines whether it is a valid password.
// The program should determine whether the string follows the following rules:
// A password must have at least 8 characters
// A password consists only of letters and digits
// A password must contain at least two digit

import java.util.regex.*

Pattern lettersAndNums = ~/^[a-zA-Z0-9]+$/
Pattern nums = ~/^[0-9]+$/

printf "give me a password to test... "
userPass = System.in.newReader().readLine()
println(userPass)
count = 0 
if((userPass.length() > 8) && (userPass =~ lettersAndNums)){
  
  passRay = userPass.toList()
  for(int i = 0; i < userPass.length(); i++){
    if(passRay[i] =~ nums){
      count++
    }
  }
  if (count >= 2){
    println("success!!!!")
  } else {
    println("try again!")
  }
} else {
  println("${userPass} is only ${userPass.length()}, it needs to be 8 characters")
}