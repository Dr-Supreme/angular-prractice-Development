## Interview Use Case

Development of a small frontend app for the Studio Ghibli API API which documentation is available at
https://ghibliapi.vercel.app/#section/Studio-Ghibli-API

http client basic examples https://www.telerik.com/blogs/angular-basics-how-to-use-httpclient
angular material documentation can be found here https://v10.material.angular.io/components/categories
angular documentation can be found here https://angular.io/docs

## Evaluate Design Thinking

1. Design & Analysis

## Hands-on development

### Basic questions

2. Change CANDIDATE_NAME by your "name"
3. In app.component.html Make the Studio Ghibli API documentation link an hyperlink opening in a new tab

### Intermediate questions

4. Impliment the HttpClient in the app.comonent.ts and load a list of all the movies into a local variable when the page loads.
5. Display all the items as a list of angular material <mat-card>'s in the `app.component.html`, dislaying the movie title as the card title, and various GhilbliFilm interface response properties in the card content.
6. Filter the response to only display movies that feature a `release_date` after the year 2000

### Advanced questions

_With stackblitz, the angular CLI is used by right-clicking "src". After generation, you can manually drag and drop to put generated contents in the desired place_

7. create a new child component called `movie-card` and orginize into the directory
8. Create an @input() property on this component so that you can pass the response data into from the partent `app.component` into `movie-card.component`
9. move all html of the movie cards to the new chid component
