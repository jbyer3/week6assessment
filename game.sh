# Creates a variable
# Does String Comparison
# Uses Conditionals
# Uses Loops
# Does Simple Math with User Input

#!/bin/bash
colors=('red' 'orange' 'green' 'purple' 'black' 'white' 'silver' 'grey')

echo ${colors[0]}

printf "Whats your favorite color?  "
read userColor

echo ${userColor}
# read userNumber
#   if [ $userNumber -gt 0 ]
#   then echo "$userNumber is a positive number"
#   echo "================="
#     while [ $counter -le $userNumber ]    
#     do
#       even=$counter%2
#       if [[ "$even" -eq 0 ]]
#         then echo "$counter is the current number, and its even"
#         result="even"
#       else 
#         echo "$counter is the current number, and its odd"
#         result="odd"
#       fi
#       ((counter++))
#     done
#   else 
#   echo "$userNumber is a negative number"
#   echo "================="
#     while [ $counter -ge $userNumber ]
#     do
#       even=$counter%2
#       if [[ "$even" -eq 0 ]]
#         then echo "$counter is the current number, and its even"
#         result="even"
#       else 
#         echo "$counter is the current number, and its odd"
#         result="odd"
#       fi
#       ((counter--))
#     done
#   fi

#   echo "User Number was $userNumber, which is fine if you $result numbers"