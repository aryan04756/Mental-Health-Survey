import express from 'express';
import { json } from 'body-parser';
import { readFileSync, writeFileSync } from 'fs';

const app = express();
const port = 3001; // Change to your desired port

app.use(json());

app.post('/submitFormData', (req, res) => {
  const formData = req.body;

  // Read the existing data from formData.json
  let existingData = [];
  try {
    existingData = JSON.parse(readFileSync('formData.json', 'utf8'));
  } catch (error) {
    console.error('Error reading formData.json:', error);
  }

  // Add the new form data to the existing data
  existingData.push(formData);

  // Write the updated data back to formData.json
  writeFileSync('formData.json', JSON.stringify(existingData, null, 2));

  res.sendStatus(200); // Send a success response
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});