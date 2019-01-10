// Write a program that prints every number between 1 and 300. 
// Additionally, if the numberis divisible by 4, have it print the word "Jingle" after the number. 
// If the number is divisible by 7, have it print the word "Jangle" after the number. 
// If the number is divisible by both 4 and 7, have it print the word "JingleJangle" after the number

def biggestNumber = 300
for(int i = 1; i <= biggestNumber; i++) {
    if((i % 4 == 0) && (i % 7 == 0)) {
      println(i + " JingleJangle")
    } else if (i % 4 == 0) {
      println(i + " Jingle")
    } else if (i % 7 == 0) {
      println(i + " Jangle")
    } else {
      println(i)
    }
}