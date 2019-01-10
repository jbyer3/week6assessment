https://github.com/jbyer3/week6assessment

Create a Branch
  in order to create a branch, its super easy.
  All you have to do is use your terminal of 
  choice and type 'git checkout -b [branch name]'.
  git checkout is the command to switch branches
  and the -b flag says we're gonna make a new one!

Pull from a Branch
  in order to pull from a branch, you must switch 
  to the branch in question using 'git checkout 
  [branch name], and then type 'git pull'. That
  should pull down all the current changes to your
  branch

Push to a Branch
  pushing to a branch that already exists is
  as simple as making sure you have all your
  commits the way that you want, and then
  typing 'git push'. If the branch does
  not exist on a remote in GitHub you will
  have to type 'git push -u origin [branch name]'

Merge with Master
  In order to merge with master you COULD push
  your local changes to GitHub so your remote branch
  is updated. Then you can go to github and open a pull
  request, either by clicking the pull request button
  or by going to the list of branches, finding your branch
  and opening a pull request their. GitHub will then 
  check if the branch can be auto merged into master. If 
  it can, then you're done. If it can't, you have to resolve
  the conflicts and then do the pull request.

Fork
  Forking a project is as easy as going to the project you want
  and then clicking the button that says fork at the top of the 
  GitHub repo page!

Add a Collaborator
  in order to add a collaborator in GitHub you go to your project,
  go to the settings, and type in the email or username of the
  person you want to add. It will then send them a notification
  about being added as a collaborator.