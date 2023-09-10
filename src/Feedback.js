import React,{Component} from 'react';
import './form.css'

class Feedback extends Component {
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
    };
}
        handleInputChange = (event) => {
            const { name, value } = event.target;
            this.setState({ [name]: value });
          }
    handleSubmit = async (event) => {
        event.preventDefault();
    }
  render()    {
  return (
    <div className="container">
        <h1>Feedback Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="question">
            <div className="question-label">
              <label htmlFor="question1">1. How satisfied are you with the mental health page for children on a scale of 1 to 5, with 1 being very dissatisfied and 5 being very satisfied?</label>
              <select id='question1' name='question1'>
              <option value='Very Satisfied'>Very Satisfied</option>
              <option value='Satisfied'>Satisfied</option>
              <option value='Neutral'>Neutral</option>
              <option value='Dissatisfied'>Dissatisfied</option>
              <option value='Very Dissatisfied'>Very Dissatisfied</option>
              </select>
            </div>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question2">2. What specific features or aspects of the page do you like the most?</label>
                    </div>
                    <div class="answer"></div>
                <textarea id="question2_description" name="question2_description" class="description-box" placeholder="Features" required></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question3">3. What specific features or aspects of the page do you think need improvement?</label>
                    </div>
                    <div class="answer"></div>
                <textarea id="question3_description" name="question3_description" class="description-box" placeholder="Features" required></textarea>
            </div>
            <div className="question">
            <div className="question-label">
              <label htmlFor="question4">4. How often do you use the app? (Daily, weekly, monthly, rarely, never)</label>
              <select id='question4' name='question4'>
              <option value='Daily'>Daily</option>
              <option value='Weekly'>Weekly</option>
              <option value='Monthly'>Monthly</option>
              <option value='Rarely'>Rarely</option>
              <option value='Never'>Never</option>
              </select>
            </div>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question5">5. How long do you typically spend using the app during each session?</label>
                    </div>
                    <div class="answer"></div>
                <textarea id="question5_description" name="question5_description" class="description-box" placeholder="Time"></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question6">6. Is there any specific topic or area of mental health you would like to see covered in the app?</label>
                    </div>
                    <div class="answer"></div>
                <textarea id="question6_description" name="question6_description" class="description-box" placeholder="Please enter the area(None if none)"></textarea>
            </div>
            <div className="question">
            <div className="question-label">
              <label htmlFor="question7">7. Have you encountered any issues related to safety or privacy while using the app?</label>
              <select id='question7' name='question7'>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
              </select>
            </div>
            </div>
            <div className="question">
            <div className="question-label">
              <label htmlFor="question8">8. Is the app's tracking or progress-monitoring feature helpful for you and your child?</label>
              <select id='question8' name='question8'>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
              </select>
            </div>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question9">9. Do you have any suggestions for making the app more engaging for children?</label>
                    </div>
                    <div class="answer"></div>
                <textarea id="question9_description" name="question9_description" class="description-box" placeholder="Suggestions(None if none)" required></textarea>
            </div>
            <div class="question">
                <div class="question-label">
                    <label for="question10">10. Do you have any other comments or feedback you would like to share about the app for children's mental health and awareness?</label>
                    </div>
                    <div class="answer"></div>
                <textarea id="question10_description" name="question10_description" class="description-box" placeholder="Any other comments(None if none)" required></textarea>
            </div>
            <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
            </form>
            </div>
                
  )
  }
}


export default Feedback;
