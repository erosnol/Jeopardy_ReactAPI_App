## JService API

JService is an API that has Jeopardy trivia questions and answers available to the public.

http://jservice.io/ (Links to an external site.)

Make a Jeopardy Trivia App using JService!


Create your App Using Create React App!

Sample Jeopardy Trivia App appearance

    Make a button labeled "Random Trivia Question" or "Get Question" or something descriptive.

    On click, have this button that will make a GET request (using fetch) to get random trivia data. Let's start you off with a win by giving you the URL: http://jservice.io/api/random

    Make some html elements like a div where you will display the question, category and points. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?).

    Make another div in your HTML where you display the answer

    Add an on click, that has a function that will toggle whether or not you can see the answer.

    Add other elements to your page to make it make sense and look good (see attached image)

    Make a div that has an h2 and two buttons

    Inside the h2 keep score, start at 0

    Make one button add the points to the score and the other to subtract points from the score (just add or subtract 1 point - using the points value from jService is Hungry for More)

    Add a little style and color to your app

## Hungry for More?
jService+

    use the points provided for the question to add and subtract from the score React docs: lifting state up (Links to an external site.)

    create a third button that resets the score to 0

    Make another button titled Get 10 Questions.

    Make a request to get random trivia data that returns 10 items: ex: 'http://jservice.io/api/random?count=10'

    Use what you learned today to display all 10 of the questions.

    Include a button with each of the questions to reveal that will reveal the answer when clicked. (You may find it easy to reveal ALL the answers, revealing just the answer of one question is challenging!)

    Use the documentation to look at the categories that are available with jService. Choose 1. Make a request to get the trivia information for that category. Display them on your page in the same way as before (a question with an answer button);

    Research other APIs! Find one that looks interesting and make a "GET" request for some data.

Submission Guidelines

Submit the Github link 
