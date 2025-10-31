
## CashCalc

Group Members; Rezwan, Shankar, Josh, Sabeet 

### Summary
CashCalc is a site that provides users with a personal finance tracker. It consists of the following pages:

1. Get-Started - Allows a user to input their budget, income, and expenses information
2. Budget Planning - Allows users to assign a level of need to each expense, which would be used to order the expenses on a displayed table
3. Dashboard - Summarizes user data (see below)
4. Profile page where the user can view and update their personal information

### Who worked on what
1. Rezwan - Get Started + RTK Query/Redux + Frontend for Home/SignIn/SignUp 
2. Josh - Dashboard + Database Set Up
3. Sabeet - Budget Planning  + Helped with Get Started 
4. Shankar - Profile Page + Authentication + Nav Bar + RTK Query/Redux 

### Completed Features

1. Get Started Page
   1. Users can input budget, monthly income, and monthly expenses information.
   2. Monthly income includes: Source, Category, Date, and incomeAmount
   3. Monthly expenses includes: Recipient, Category, Date, and expenseAmount
   4. Arrays for monthly income and monthly expenses are dynamically displayed and updated in the database as entries are submitted by the user
   5. Total income and total expenses are calculated and then updated in the database 

3. Budget Planning Page
   1. Consists of 2 components: BudgetPlanning.js and BPcard.js
   2. For a new user, the budget planning page will be a table with 3 empty columns initially. The user has to add expenses through the Get Started page first
   3. For a new user who has added expenses to their account, that user would have to press the add item button, select an expense, assign a need (necessary, medium, and unnecessary), and then confirm their choices.
   4. After assigning needs to their expenses, expenses will show on the budget planning page in their respective need columns 

4. Dashboard
   1. Three graphs, along with a display of total income, total expenses, profit margin and a list of expenses inputted by the user
   2. Dashboard recieves fetch calls from database and dynamically generates graphical represenation on every subsequent entry
   3. Users are then free to use the data displayed as they need in order to make better financial decisions
  
6. Profile Page 
   1. Allows user to view and update their personal informatio as well as their username and password 


### Uncompleted Features
Remember me (skip login using cookies)
* Ran out of time due to prioritizing functionality of more important parts of the site

Reset email
* Able to send the reset link Containing id to gmail but unable to create a form without logging in and change the password

Budget Planning
* Due to having too much trouble trying to correctly implement the add item button in BPCard, I moved the logic over to BudgetPlanning, and made 1 uniform button rather than 3 made for each column(see figma for the design differences)
* The next problem I ran into was displaying the expenses within each column based on need. I wasn’t able to display it on the budgetplanning component and the only way I could was on the BPCard component 
* Due to this need is added on one component while being displayed through another component, and I couldnt figure out how to keep everything up to date with database changes and by this point we had no more time so left the page as is. However logging out, refreshing the page, and logging back in shows the need correctly based on changes on the database during testing.

Dashboard
* The Linechart Income and the Piechart Spent divs dynamically render on every subsequent entry to update the graphs itself. However, the **Linechart Expenses** **does not** do this, and as well it does not update on a new login. It is unclear to me and my peers what the issue is
* Piechart id displayed incorrectly on tooltip where in the linecharts they use strings on the tooltip, piechart instead defaults to using the id assigned to the objects in the array and unsure how to resolve this issue
* There was not enough time to render the savings graph, as we had to devote more time to fixing bugs we encountered during development of our own components and trying to get redux to work properly in the frontend
* There could have been a more customized tooltip if more time to learn and understand
* When it came to the display of the x-axis, strings exceeding a certain length would get cut off/overlap and altering the padding on X-axis did not solve the issue

Get Started

* Editing and removing entries in GetStarted page, which would then update the database and state accordingly
* A lot of time was spent on fixing other errors on the page,  which reduced the time that was designated to implement this feature 
* Errors that were dealt with:
  * Database not updating after state was updated
  * Displayed entries not displaying database data and only displaying new entries 
  * Total income and total expenses being undefined (was calculating before asynchronous fetching of data was complete)

### Start Guide

#### Requirement
- Node.js need to be installed 
- Any IDE can be used preferred VisualCode Studio

#### Installation
- Clone the code [click me to copy the link to clone](https://github.com/Rezwan192/CashCalc.git)
- In terminal 
```
cd <path-to-where-you-want-to-clone> 
git clone <link>

```

### Quick-Start
- Navigate to the project
- copy the following command and paste in terminal
```
cd <Path to project>
npm install
npm start
cd frontend
npm install
npm start

```
- Or use this to run both frontend and backend concurrently
``` 
npm run build
```


### Tools we used
Redux
Express
Mongoose/MongoDB
RTK Query
React
Recharts

### References

Multer package for uploading image: https://www.npmjs.com/package/multer
Rechart package for displaying line chart: link https://recharts.org/en-US/
Nodemailer to send reset password link using w3schools: https://www.w3schools.com/nodejs/nodejs_email.asp
Redux Tutorial: https://youtu.be/iBUJVy8phqw?si=-yzt-HCIzE0sxaWf
RTK Query for fetching data from the backend: https://redux-toolkit.js.org/rtk-query/overview 
Mern Auth Tutorial: https://www.youtube.com/watch?v=R4AhvYORZRY
MongoDB Documentation: https://www.mongodb.com/docs/
Updating nested data tutorial(used for updating need functionality): https://www.youtube.com/watch?v=aA_y3ewrnpI 
