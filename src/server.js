const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the origin(s) you want to allow
};
app.use(cors(corsOptions));
// Define an endpoint to handle form submissions
app.post('/submitFormData', (req, res) => {
  const formData = req.body;
  // Load existing data from the JSON file (if it exists)
  let existingData = [];
  try {
    const data = fs.readFileSync('responses.json', 'utf8');
    existingData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading existing data:', error);
  }

  // Add new form data to the existing data
  existingData.push(formData);

  // Save the updated data to the JSON file
  fs.writeFile('responses.json', JSON.stringify(existingData, null, 2), (err) => {
    if (err) {
      console.error('Error writing data to file:', err);
      return res.status(500).json({ error: 'Failed to save data' });
    }
    console.log('Form data saved successfully.');
    res.status(200).json({ message: 'Form data saved successfully' });
  });
});
app.post('/submitFeedbackFormData', (req, res) => {
  const formData = req.body;
  // Load existing data from the JSON file (if it exists)
  let existingData = [];
  try {
    const data = fs.readFileSync('Feedbackresponses.json', 'utf8');
    existingData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading existing data:', error);
  }

  // Add new form data to the existing data
  existingData.push(formData);

  // Save the updated data to the JSON file
  fs.writeFile('Feedbackresponses.json', JSON.stringify(existingData, null, 2), (err) => {
    if (err) {
      console.error('Error writing data to file:', err);
      return res.status(500).json({ error: 'Failed to save data' });
    }
    console.log('Form data saved successfully.');
    res.status(200).json({ message: 'Form data saved successfully' });
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
