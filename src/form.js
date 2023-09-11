import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './form.css';

function MentalHealthSurvey() { 
  const [formData, setFormData] = useState({
  
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
      question8: '',
      question9: '',
      question10: '',
      question11: '',
      question12: '',
      question13: '',

  });
  const [descriptionData, setDescriptionData] = useState({
    question1_description: '',
    question2_description: '',
    question3_description: '',
    question4_description: '',
    question5_description: '',
    question6_description: '',
    question7_description: '',
    question8_description: '',
    question9_description: '',
    question10_description: '',
    question11_description: '',
    question12_description: '',
    question13_description: '',
  });
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDescriptionChange = (event) => {
    const { name, value } = event.target;
    setDescriptionData({
      ...descriptionData,
      [name]: value,
    });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const combinedData = {
      ...formData,
      ...descriptionData,
    };
  
    try {
      const response = await fetch('http://localhost:5000/submitFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedData),
      });
  
      if (response.ok) {
        console.log('Form data saved successfully.');
        setFormData({
          question1: '',
          question2: '',
          question3: '',
          question4: '',
          question5: '',
          question6: '',
          question7: '',
          question8: '',
          question9: '',
          question10: '',
          question11: '',
          question12: '',
          question13: '',
        });
        setDescriptionData({
          question1_description: '',
          question2_description: '',
          question3_description: '',
          question4_description: '',
          question5_description: '',
          question6_description: '',
          question7_description: '',
          question8_description: '',
          question9_description: '',
          question10_description: '',
          question11_description: '',
          question12_description: '',
          question13_description: '',
        });

        navigate('/Report');
        // You can reset the form or perform any other actions here.
      } else {
        console.error('Form data saving failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
    return (
      <div className="container">
        <h1 style={{ color: '#FE7F2D' }}><strong>Mental Health Survey</strong></h1>
        <form onSubmit={handleSubmit}>
          <div className="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
            <div className="question-label">
              <label htmlFor="question1">1. Have you ever experienced feelings of sadness or low mood?</label>
              <select id='question1' name='question1' value={formData.question1} onChange={handleInputChange}>
              <option value='Select'>Select</option>
              <option value='Most Likely'>Most Likely</option>
              <option value='Likely'>Likely</option>
              <option value='Sometimes'>Sometimes</option>
              <option value='Never'>Never</option></select>
            </div>
            <div className="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}></div>
            <textarea id="question1_description" name="question1_description" className="description-box" placeholder="Describe your feelings (optional)" value={descriptionData.question1_description} onChange={handleDescriptionChange}></textarea>
          </div>
          <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question2">2. Do you often feel anxious or worried?</label>
                    <select id='question2' name='question2' value={formData.question2} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Most Likely'>Most Likely</option>
                    <option value='Likely'>Likely</option>
                    <option value='Sometimes'>Sometimes</option>
                    <option value='Never'>Never</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question2_description" name="question2_description" class="description-box" placeholder="Describe your feelings (optional)"value={descriptionData.question2_description} onChange={handleDescriptionChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question3">3. Have you noticed changes in your appetite, weight, or sleep patterns?</label>
                    <select id='question3' name='question3' value={formData.question3} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question3_description" name="question3_description" class="description-box" placeholder="Describe your changes (optional)" value={descriptionData.question3_description} onChange={handleDescriptionChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question4">4. What were the changes in your appetite?</label>
                    <select id='question4' name='question4' value={formData.question4} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Increase'>Increase</option>
                    <option value='Decrease'>Decrease</option>
                    <option value='None'>None</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question4_description" name="question4_description" class="description-box" placeholder="Describe your changes (optional)" value={descriptionData.question4_description} onChange={handleDescriptionChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question5">5. What were the changes in your weight?</label>
                    <select id='question5' name='question5' value={formData.question5} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Increase'>Increase</option>
                    <option value='Decrease'>Decrease</option>
                    <option value='None'>None</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question5_description" name="question5_description" class="description-box" placeholder="Describe your changes (optional)" value={descriptionData.question5_description} onChange={handleDescriptionChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question6">6. What were the changes in your sleep schedule?</label>
                    <select id='question6' name='question6' value={formData.question6} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Increase'>Increase</option>
                    <option value='Decrease'>Decrease</option>
                    <option value='None'>None</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question6_description" name="question6_description" class="description-box" placeholder="Describe your changes (optional)" value={descriptionData.question6_description} onChange={handleDescriptionChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question7">7. Do you have trouble concentrating or making decisions?</label>
                    <select id='question7' name='question7' value={formData.question7} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Most Likely'>Most Likely</option>
                    <option value='Likely'>Likely</option>
                    <option value='Sometimes'>Sometimes</option>
                    <option value='Never'>Never</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question7_description" name="question7_description" class="description-box" placeholder="Describe your difficulties (optional)" value={descriptionData.question7_description} onChange={handleDescriptionChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question8">8. Have you lost interest in activities you used to enjoy?</label>
                    <select id='question8' name='question8' value={formData.question8} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question8_description" name="question8_description" class="description-box" placeholder="Describe your feelings (optional)" value={descriptionData.question8_description} onChange={handleInputChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question9">9. Are you experiencing physical symptoms like headaches or stomachaches due to stress or anxiety?</label>
                    <select id='question9' name='question9' value={formData.question9} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Most Likely'>Most Likely</option>
                    <option value='Likely'>Likely</option>
                    <option value='Sometimes'>Sometimes</option>
                    <option value='Never'>Never</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question9_description" name="question9_description" class="description-box" placeholder="Describe your symptoms (optional)" value={descriptionData.question9_description} onChange={handleInputChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question10">10. Have you had thoughts of harming yourself or ending your life?</label>
                    <select id='question10' name='question10' value={formData.question10} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question10_description" name="question10_description" class="description-box" placeholder="Describe your thoughts (optional)" value={descriptionData.question10_description} onChange={handleInputChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question11">11. Are you easily irritated or angered?</label>
                    <select id='question11' name='question11' value={formData.question11} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}> 
                </div>
                <textarea id="question11_description" name="question11_description" class="description-box" placeholder="Describe your feelings (optional)" value={descriptionData.question11_description} onChange={handleInputChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question12">12. Have you sought professional help for your mental health concerns?</label>
                    <select id='question12' name='question12' value={formData.question12} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question12_description" name="question12_description" class="description-box" placeholder="Describe your experience (optional)" value={descriptionData.question12_description} onChange={handleInputChange}></textarea>
            </div>
            <div class="question" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                <div class="question-label">
                    <label for="question13">13. Do you ever feel like you don't want to talk to anyone for a really long time and just spend time with yourself?</label>
                    <select id='question13' name='question13' value={formData.question13} onChange={handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer" style={{ color: '#265454', fontFamily: 'Comic Sans MS, sans-serif'}}>
                </div>
                <textarea id="question13_description" name="question13_description" class="description-box" placeholder="Describe your feelings (optional)" value={descriptionData.question13_description} onChange={handleInputChange}></textarea>
            </div>

          <div className="submit-button">
            <button onSubmit={handleSubmit} type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
export default MentalHealthSurvey;
 
