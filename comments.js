// Create web server
// Add comments to the web server
// Add a form to the web server to allow users to add comments
// Use an array to store the comments
// Use a form to submit the comments to the web server
// Add a button to the web server to allow users to delete comments
// Use the array to delete the comments from the web server

// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add comments to the web server
let comments = [
  { name: 'John', comment: 'I am a comment' },
  { name: 'Jane', comment: 'I am a comment too' },
  { name: 'Jack', comment: 'I am also a comment' }
];

// Add a form to the web server to allow users to add comments
app.get('/', (req, res) => {
  res.send(`
    <form action="/add" method="post">
      <input type="text" name="name" placeholder="Name" required>
      <input type="text" name="comment" placeholder="Comment" required>
      <button type="submit">Add</button>
    </form>
    <ul>
      ${comments.map(comment => `<li>${comment.name}: ${comment.comment}</li>`).join('')}
    </ul>
  `);
});

// Use an array to store the comments
app.post('/add', express.urlencoded({ extended: false }), (req, res) => {
  comments.push({ name: req.body.name, comment: req.body.comment });
  res.redirect('/');
});

// Add a button to the web server to allow users to delete comments
app.get('/delete/:index', (req, res) => {
  comments.splice(req.params.index, 1);
  res.redirect('/');
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
 
 The above code creates a web server that allows users to add and delete comments. The  /  route is used to display the form and comments. The form is used to add comments and the  /add  route is used to add comments to the array. The  /delete/:index  route is used to delete comments from the array. 
 Conclusion 
 In this article, we looked at how to create a web server using the Express framework. We also looked at how to add routes to the web server
