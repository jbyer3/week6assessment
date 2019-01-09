https://github.com/jbyer3/week6assessment

1. List 10 Unix Commands and tell me what they do.
  ls - shows files in your current directory (wherever you are when you run it)
  man - brings up the manual for whatever command you add after. Like `man ls`
  cd - cd stands for change directory. It lets you move from one directory to another. 
  touch - touch is the command to create a file
  mkdir - mkdir is the command to create a directory
  rm - rm is the command to delete a file
  cat - cat will print out a section of the file that you pass to it. Like `cat shortanswer.md`
  less - less is similar to cat but it will let you navigate the entire file in a read only state with VIM controls
  mv - mv is the command that moves files or directories
  cp - cp is the command that copies files or directories
2. List 5 common GitHub Commands and explain what they do to a 5th grader.
  git init - git init creates a .git directory and tells git to watch this directory 
  git status - git status shows the information that git is currently aware of in reference to the state of your git repository
  git add - git add will tell git to add a file or files to its list of tracked files, which is basically the changes its keeping track of
  git branch - git branch by itself will show you all of the branches for your current git repository, but it can have several optional flags passed to it to do things like delete a branch.
  git commit - git commit is basically like hitting save on your currently tracked files. it creates a snapshot of all of the files and lets you revisit that state at a later time.
3. What are the different file permissions associated with Scripts?
  THIS QUESTION IS NOT AS CLEAR AS IT COULD BE
  when you are creating a BASH script, you must run `chmod u+x` in order to make the file into an executable. There are several different 'permissions' that you can manipulate. Basically the file permissions say who is able to access, change, or run a particular file based on their user profile. U+X means this file will be executable by YOU and YOU alone.
4. How would you run mulitple commands in the Powershell terminal?
  running multiple commands in powershells terminal is done by using the ; character. Like `command1 ; command2`
5. How would you run multiple Linux commands at one time?
  running multiple commands in linux (maybe you mean unix?) terminals is done by using the | character. Like `command1 | command2`. This will pass the output of the first command to the second.
