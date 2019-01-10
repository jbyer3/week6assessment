#!/bin/bash
myFavColor="blue"

printf "Whats your favorite color?  "
read userFavColor
  if [[ "$userFavColor" == "$myFavColor" ]] 
  then
  echo "Hey, we have the same favorite color! $myFavColor"
  else
  echo "I really wish you had said $myFavColor instead of $userFavColor"
fi

counter=0

printf "Pick a number!  "
read userNumber
echo $userNumber
  if [ $userNumber -gt 0 ]
  then echo "$userNumber is a positive number"
  echo "================="
    while [ $counter -le $userNumber ]    
    do
      even=$counter%2
      if [[ "$even" -eq 0 ]]
        then echo "$counter is the current number, and its even"
        result="even"
      else 
        echo "$counter is the current number, and its odd"
        result="odd"
      fi
      ((counter++))
    done
  else 
  echo "$userNumber is a negative number"
  echo "================="
    while [ $counter -ge $userNumber ]
    do
      even=$counter%2
      if [[ "$even" -eq 0 ]]
        then echo "$counter is the current number, and its even"
        result="even"
      else 
        echo "$counter is the current number, and its odd"
        result="odd"
      fi
      ((counter--))
    done
  fi

  echo "User Number was $userNumber, which is fine if you $result numbers"