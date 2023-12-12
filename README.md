# Digimon Database
A community driven front-end application to preserve Kenji Watanabe's Digimon works. This front-end application utilizes Shadow Smith's Digimon API which aggregates high-resolution Digimon artwork drawn by Kenji Watanabe.

**Link to project:** [https://abkhan505.github.io/digimon-database/](https://abkhan505.github.io/digimon-database/)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This project uses a combination of HTML, CSS and JavaScript in order to deliver a front-end application that allows an individual to parse through Kenji Watanabe's artwork for the original Digimon World. 

I used HTML to create a simple interface that would use an input and button tag to obtain information on what Digimon artwork to pull. I also added a "Expand List" button to allow the user to view every Digimon within the database. I used CSS to create a combination of media queries to control the appearance of this application on multiple different devices. I used JavaScript to create a fetch method to pull information in the form of JSON. My page would then reflect the artwork of the Digimon entered within the search bar. 

## Optimizations

Originally, I was intending on just creating a long list in HTML using the (li) tag but this would be incredibly inefficient. Therefore, I used JavaScript to simply create (li) tags and enter the name of every single Digimon object within the database on page load. This optimization alleviates a lot of management as I don't need to physically add to the list everytime this database updates. This application will now simply pull the current list of Digimon everytime it loads therefore remaining consistently updated. One complication I encountered was conveying if a Digimon wasn't in the database. To remedy this, I used an if/else statement to generate an alert if the object returned an error message for the input provided. 

Unfortunately, I did not have the time to implement many optimizations following product launch. However, if time allows I would love to add several features. This application can become significantly more user friendly by creating a drop down list that would auto-fill the entry within the search box with whatever Digimon we click on. Another optimization would be to have a built in filter to search for Digimon with specific names, attributes or stages (such as Rookie, Champion, Ultimate or Mega). 

## Lessons Learned:

This project allowed me to combine several facets of front-end application development with a focus on learning API utilization. I was able to utilize and apply my experience with HTML and CSS to create a simple but pleasant interface that the user can interact with. I was able to use CSS to change the visibility of certain elements such as the list and mre importantly, media queries which optimized my application for a variety of viewports. More importantly, I was able to use JavaScript to obtain text from a textbox in HTML. I was able to then store this text in a variable and use it in application of an API that returned a JSON using the fetch method. I learned how to mediate misinputs from the user and return an alert to notify the user a Digimon isn't in the database. I learned how to optimize my application by actively pulling a list of Digimon from the API on page load to ensure consistency. Ultimately, this project made me more proficient in utilizing API's and providing a robust user experience through it.  

