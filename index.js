
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
});

app.post('/bhfl', (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const data = body.data;

    console.log(data);
    let numbers = [];
    let chararr = [];

    for (let i = 0; i < data.length; i++) {
      if (!isNaN(data[i])) {
        numbers.push(data[i]);
      } else {
        chararr.push(data[i]);
      }
    }

    const lowercaseAlphabets = chararr.filter(item => item >= 'a' && item <= 'z');
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 
      ? [lowercaseAlphabets.reduce((max, current) => max > current ? max : current)] 
      : [];

    res.send({
      "is_success": true,
      "user_id": "Rakesh_Kumar_12102003",
      "email": "rakeshkumar.a2021@vitstudent.ac.in",
      "roll_number": "21BDS0255",
      "numbers": numbers,
      "alphabets": chararr,
      "highest_lowercase_alphabet": highestLowercaseAlphabet
    });
  } catch (error) {
    res.status(500).send({
        "is_success": false,
        "user_id": "Rakesh_Kumar_12102003",
        "email": "rakeshkumar.a2021@vitstudent.ac.in",
        "roll_number": "21BDS0255",
      "message": "An error occurred while processing your request.",
      "error": error.message,
    });
  }
});

app.get('/bhfl', (req, res) => {
  res.send({
    "operation_code": 1
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});