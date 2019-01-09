1. What is the difference between PowerShell and Shell Scripting? Is there a reason we would use one over the other?
THIS QUESTION CAN BE BETTER WORDED
I understand that the biggest difference between PowerShell(PS from now on) and Shell Scripting(BASH from now on) is that BASH scripts run as executables after you alter their permissions while PS scripts need you to have the PS environment and shell in order to run it. Many machines in programming operate with Linux or OSX so BASH is already installed, making running a script relatively simple and easy regardless of machine. For PS to work we have been running the files in the PS shell just to make it work. I would lean into BASH because it seems like it carries over more and PS would only be useful if you were working in a .NET shop.

2. Give me some examples when you should not use scripting.
  THIS QUESTION IS ALSO ODD
  So, the slides probably don't answer this. I remember Eric saying in class that if you are using a shell script (of any flavor) and trying to get user input, you are doing it wrong. Shell scripts should just be tools for automation and not to get user input. So. Don't use scripts to get user input (that should just be a program). Doing lots of math seems complicated in shell scripting as well. Basic stuff is fine, but BASH and PS do not seem to have robust capabilities with math. Groovy is a bit of an exception to this, but thats hardly fair because Groovy feels more like a programming language than a Scripting language to begin with. Maybe there is another answer to this question but I honestly am not completely sure what to say.

3. What is Version Control and how is Git and GitHub involved?
  Version control is a way of saving your work in a fashion that allows you to revisit old versions. Or have control over versions. Version Control? No? The most popular form of version control is Distributed Version Control which is where there is a different version of the project for every persons local machine. Git is the most popular system for doing Version Control. It creates a series of commits that you can navigate through the command line or a GUI. These versions are all just saved on your machine locally, but through GitHub they can live online. GitHub is one of many websites that allow you to save your Git repositories online in order to share, collaborate, and store your work in a place that is safe from physical harm.

4. What are the different roles that a team member could play in the GitHub flow?
  um. this is another question that seems vague.
  There are roles people play for the GitHub work flow. Someone has to 'own' the repository, there can be someone who can sets the rules for pushing to specific branches, like only one person can merge to master. People can 'own' features? And work on feature branches? You can make it so that pull requests are required for the merging of branches, and each pull request can require a certain amount of people to review it? So I guess you could be a reviewer? I don't really know how to answer this question. Is this about GitHub or about Agile Methodology? GitHub flow seems more about what rules you set around creating and merging branches, and it doesn't matter much what 'roles' you have as long as someone has the ability to veto merges or make changes before merges happen.

5. How do you handle Merge Conflict?
  What is the best way to avoid them?
  Easy way to handle merge conflicts is to go into the files and tell Git which changes to keep and which ones to throw away. The best way to avoid them is to make sure that people are working on seperate branches and not working on the same stuff at the same time. You can merge some content from something like a dev branch into your own personal branch and sort out the merge to your branch, and THEN merge into the dev branch afterwards. Like tempering an egg. Its the safest way to handle merges. But conflicts are easy enough to resolve manually if its small changes.

6. Explain to a 14 year old what Branching in a GitHub Repo is and why it is useful in the workflow.
  Well Sally, branching in a GitHub repo is pretty dang neat. Imagine you're writing a novel and you don't know what direction you want to go. You have a character and they're heading into an important life event. What happens if they get hit by a bus? What happens if they fail out of school and become homeless? What happens if they meet the love of their lives. Using branches, you can have one 'story' that goes in many different directions. Think of a Choose Your Own Adventure novel, there are places that the story forks and can go in one of two directions. Thats exactly what branching does! So imagine you're working on a paper for your social studies class, you can have one paper that can go a number of different directions. Isn't that just the dopest thing ever?!?!? Hit a dab with me real quick! Lets do that floss dance!

7. When should you work on a branch versus working on the master repo?
  If you are working on something like a feature, it should definitely be on a seperate branch. I mean ideally I feel like everything should be done in a branch. However I believe the answer to this question is asking for me to say "hotfix". You work on the master repo when you have a "hotfix" like you need to fix a quick typo or something like that. However. Most of the time that will not be necessary. Do ALL work in a branch.

8. Describe the 2 of the 4 parts of a MEAN Stack Application, what do they all do and how do they all work together?
  EXPRESS - The back end of a MEAN application. Express is a super lightweight framework for Node.js and makes creating webapps super fast and easy. Express is used to create the API that is consumed by the front end of the MEAN app. So it is typically hooked up to a database of some sort and used to save and pull data from it. Then that data is served to the front end of the application where it can be shown and possibly manipulated by the user.
  ANGULAR - the front end of a MEAN application. Its responsible for the views portion in the sense of a typical MVC app. Angular is a sweet JS framework made by Google. It helps to dynamically render content on a single page all created by JavaScript. This way you have a super snappy and fluid User Experience. 
  Angular and Express are usually held in two seperate projects that talk to each other. Each with their own server they operate as two sides of one coin in conjunction as a MEAN "full-stack" app.

9. Which framework, associated with a MEAN stack application, could be switched out for a different framework?
  How would that change what the application could do?
  How would that change environment configuration?

  Well. If MEAN is MongoDB, Express.JS, Angular, and Node.JS... almost all of them can be switched out! Technically MEAN is supposed to be fullstack JS which implies that the DB has to be Mongo, but really we're just using an ORM like Mongoose anyway, right? The M could be MySQL, or even PostgreSQL and still be working great. Sequelize is an ORM that works with both MySQL and PostgreSQL and it works great with JS. That way you could do all this awesome neato-burrito JS code and have a relational database too!!! So thats the M. E is Express.JS which is a framework for using Node.JS because writing the whole API in just plain Node would take forever!!! You could change Express to Sails.JS or Hapi.JS or Koa.JS or Meteor.JS or.... The list goes on and on. That really just helps you build up an API. Under the covers its still just Node.JS, but you can make it pretty much whatever you want to do. Node.JS, the N, is the only thing you CANT change really. The last part, A, is Angular. Thats just the 'view' portion being leveraged in a JS front-end framework. You could do that with React and call it MERN, or you could do it with Vue and call it VENoM. I don't really like that last name (VENoM) but Vue is cool. Those are all just different JS frameworks handling the presentation layer in a slightly different way. I suspect you could use any JS framework in the same way but I am not as knowledgeable about the older ones as I am about Angular, React, and Vue. The only thing that I can say that changes what the application can do is using relational data with an SQL database instead of mongo...... Honestly other than that they all "do" the same thing. I don't really know what you are asking for me to say about environment configuration. That does not make any sense to me