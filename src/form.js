import React, { Component } from 'react';
import './form.css';

class MentalHealthSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      console.log('Updated state:', this.state);
    });
  }
  

  handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
        question1: this.state.question1,
        question2: this.state.question2,
        question3: this.state.question3,
        question4: this.state.question4,
        question5: this.state.question5,
        question6: this.state.question6,
        question7: this.state.question7,
        question8: this.state.question8,
        question9: this.state.question9,
        question10: this.state.question10,
        question11: this.state.question11,
        question12: this.state.question12,
        question13: this.state.question13,
        question1_description: this.state.question1_description,
        question2_description: this.state.question2_description,
        question3_description: this.state.question3_description,
        question4_description: this.state.question4_description,
        question5_description: this.state.question5_description,
        question6_description: this.state.question6_description,
        question7_description: this.state.question7_description,
        question8_description: this.state.question8_description,
        question9_description: this.state.question9_description,
        question10_description: this.state.question10_description,
        question11_description: this.state.question11_description,
        question12_description: this.state.question12_description,
        question13_description: this.state.question13_description,
    };
  
    try {
      const response = await fetch('http://localhost:5000/submitFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form data saved successfully.');
        this.setState({
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
        })
        // You can reset the form or perform any other actions here.
      } else {
        console.error('Form data saving failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  render() {
    return (
      <div className="container">
        <h1>Mental Health Survey</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="question">
            <div className="question-label">
              <label htmlFor="question1">1. Have you ever experienced feelings of sadness or low mood?</label>
              <select id='question1' name='question1' onChange={this.handleInputChange}>
              <option value='Select'>Select</option>
              <option value='Most Likely'>Most Likely</option>
              <option value='Likely'>Likely</option>
              <option value='Sometimes'>Sometimes</option>
              <option value='Never'>Never</option></select>
            </div>
            <div className="answer"></div>
            <textarea id="question1_description" name="question1_description" className="description-box" placeholder="Describe your feelings (optional)" value={this.state.question1_description} onChange={this.handleInputChange}></textarea>
          </div>
          <div class="question">
                <div class="question-label">
                    <label for="question2">2. Do you often feel anxious or worried?</label>
                    <select id='question2' name='question2' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Most Likely'>Most Likely</option>
                    <option value='Likely'>Likely</option>
                    <option value='Sometimes'>Sometimes</option>
                    <option value='Never'>Never</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question2_description" name="question2_description" class="description-box" placeholder="Describe your feelings (optional)" value={this.state.question2_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question3">3. Have you noticed changes in your appetite, weight, or sleep patterns?</label>
                    <select id='question3' name='question3' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question3_description" name="question3_description" class="description-box" placeholder="Describe your changes (optional)" value={this.state.question3_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question4">4. What were the changes in your appetite?</label>
                    <select id='question4' name='question4' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Increase'>Increase</option>
                    <option value='Decrease'>Decrease</option>
                    <option value='None'>None</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question4_description" name="question4_description" class="description-box" placeholder="Describe your changes (optional)" value={this.state.question4_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question5">5. What were the changes in your weight?</label>
                    <select id='question5' name='question5' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Increase'>Increase</option>
                    <option value='Decrease'>Decrease</option>
                    <option value='None'>None</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question5_description" name="question5_description" class="description-box" placeholder="Describe your changes (optional)" value={this.state.question5_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question6">6. What were the changes in your sleep schedule?</label>
                    <select id='question6' name='question6' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Increase'>Increase</option>
                    <option value='Decrease'>Decrease</option>
                    <option value='None'>None</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question6_description" name="question6_description" class="description-box" placeholder="Describe your changes (optional)" value={this.state.question6_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question7">7. Do you have trouble concentrating or making decisions?</label>
                    <select id='question7' name='question7' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Most Likely'>Most Likely</option>
                    <option value='Likely'>Likely</option>
                    <option value='Sometimes'>Sometimes</option>
                    <option value='Never'>Never</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question7_description" name="question7_description" class="description-box" placeholder="Describe your difficulties (optional)" value={this.state.question7_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question8">8. Have you lost interest in activities you used to enjoy?</label>
                    <select id='question8' name='question8' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question8_description" name="question8_description" class="description-box" placeholder="Describe your feelings (optional)" value={this.state.question8_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question9">9. Are you experiencing physical symptoms like headaches or stomachaches due to stress or anxiety?</label>
                    <select id='question9' name='question9' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Most Likely'>Most Likely</option>
                    <option value='Likely'>Likely</option>
                    <option value='Sometimes'>Sometimes</option>
                    <option value='Never'>Never</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question9_description" name="question9_description" class="description-box" placeholder="Describe your symptoms (optional)" value={this.state.question9_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question10">10. Have you had thoughts of harming yourself or ending your life?</label>
                    <select id='question10' name='question10' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question10_description" name="question10_description" class="description-box" placeholder="Describe your thoughts (optional)" value={this.state.question10_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question11">11. Are you easily irritated or angered?</label>
                    <select id='question11' name='question11' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question11_description" name="question11_description" class="description-box" placeholder="Describe your feelings (optional)" value={this.state.question11_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question12">12. Have you sought professional help for your mental health concerns?</label>
                    <select id='question12' name='question12' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question12_description" name="question12_description" class="description-box" placeholder="Describe your experience (optional)" value={this.state.question12_description} onChange={this.handleInputChange}></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question13">13. Do you ever feel like you don't want to talk to anyone for a really long time and just spend time with yourself?</label>
                    <select id='question13' name='question13' onChange={this.handleInputChange}>
                    <option value='Select'>Select</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                    </select>
                </div>
                <div class="answer">
                </div>
                <textarea id="question13_description" name="question13_description" class="description-box" placeholder="Describe your feelings (optional)" value={this.state.question13_description} onChange={this.handleInputChange}></textarea>
            </div>

          <div className="submit-button">
            <button onSubmit={this.handleSubmit} type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MentalHealthSurvey;
