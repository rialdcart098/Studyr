# Enter Studyr (beta)!

## A test prep website for people in New York taking the regents exams!
[Licensed under the MIT License](LICENSE)


### So far we have tests from subjects such as:
- Geometry
- Algebra II
- Algebra I

## More subjects will be added in the future.

### About this project:

I started this project off just for fun; just for me to learn myself. I see a problem where there aren't any good resources for the NY regents in June that people take. Besides the practice test, most things cost money. Our mission is to help kids in New York be able to do just a bit better. Even a 1 point increase in an exam fulfulls our mission. Personally, I have taken the regents for Spanish I (100), Algebra I (98), Geometry (89), Biology (92), and Earth Science (96).

The methods I have used to be successful in these regents exams is what I want to share to other students across the state to help them achieve greater scores than me.

This website was mainly made for students to check on their own, specifically people in NY. This practice, however, can be used by anyone taking similar highschool courses in the country (Although slightly different curriculum).


### Information we take:
- As of now, we don't use any of your data, except for your Email if you have applied to contribute for our project or found any issues. We only use your email to get back on you for the forms. We don't do anything with your birthday either yet, in the future we will use it just to recommend courses.
  #### **WE WILL NEVER ASK FOR YOUR CREDIT CARD INFORMATION, IF ANYONE PRETENDING TO BE US ASKS FOR ANY SENSITIVE INFORMATION, IT IS A SCAM.**
### Features currently:
- Small quizzes to take with image stimulus taken from the actual regents
- A table of previous tests that have been taken

### Features hoping to be added in the future:
- More statistics of how you do on each unit of a subject
- More subjects, and more exams always
- Plan on making more websites under this one's wing
  - Error logger for MCQ style exams such as the SAT
  - 
- Learning resources
- AI tutor and test generator.

### How will I plan on implementing these features?
- I will most likely use an LLM to make the AI create json files as the quizzes, and make a chat bot. For now, this is a completely free project, and it will use LLM's that are completely free.
  - Going into detail in this, I hope to make a flow where I give the AI a detailed prompt including the user's analytics of the quizzes taken, based on their subject, and a json example in which it will answer with just the `.json` file to give the quiz.
- For the AI Assistant I will have to make even more of a detailed prompt so that the AI doesn't break or give any NSFW responses.
- Add more to the schema to get more information on how a user performs. For example, get averages of how a user does in each unit of a subject, and feed it to the LLM to make a more personalized quiz. Also use Chart.js to make different types of charts other than a table.
- I can make small videos covering each question, and short lectures on each topic. A practice set can be added at the end, and some text content if user doesn't like watching videos.
- Will take a look at https://www.nysedregents.org/ for more quiz questions.
- Extra information on the new clusters recently added into the science regents.



##  If you would like to help us on our journey:
https://forms.gle/Z7tpWrpZVDdVGvw88

### Tech stack:
- NodeJS and ExpressJS (Backend)
- React (Frontend)
- MongoDB (Database)

### How to contribute to the repository:

Click "Fork" on the master branch

Clone the fork you have made

```bash
pip install -r requirements.txt
python -m venv .venv
git clone https://github.com/youruser/forkedrepo.git
# make changes
git add .
git commit -m "commit message"
git push origin new-branch
```

Go to your repository on Github and click "Compare  & Pull Request"

You will have to make your own MongoDB cluster, link that into the .env file, and execute the .rest files in ./backend/requests/initdb.rest

### Walkthrough
- Sign Up with any username, and make sure to create a password that fits the criteria.
- Head to the quizzes section at the top to see the selection of subjects and quizzes
- Search the subject you need to
- Click the button on the subject you would want to take
- On the right, you have quiz(zes) for said subject. Click it to start testing.
- Read the question carefully, there is no time limit
- Select an option when you are ready
- If you got the question wrong, it is a good idea to take a look at the explanation given to see how to solve the question correctly
- Press "Next" to move on to the next question
- Once done, you get your score. you can go Home to see more detailed results, or go straight to quizzes to take another quiz.

### Other ways to help
- Advertise on any social media platform
- Tell any friends or your school


