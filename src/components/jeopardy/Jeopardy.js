import React, { Component } from 'react';
//import our service
import JeopardyService from "../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();

    this.state = {
      formData: { answer: "" },
      data: {},
      score: 0

    }
  }
  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  }
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.formData.answer === this.state.data.answer) {
      this.setState((prevState) => {
        return { score: prevState.score + prevState.data.value }

      })


      console.log("correct");
    } else {
      this.setState((prevState) => {
        return { score: prevState.score - prevState.data.value }

      })


      console.log("incorrect");
    }
    this.getNewQuestion()

  }





  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {





    let element = ""

    if (this.state.data.category !== undefined) {
      element = (
        <div>
          <strong>QUESTION:</strong> {this.state.data.question}
          <br />
          <strong>POINT VALUE:</strong> {this.state.data.value}
          <br />
          <strong>TITLE:</strong> {this.state.data.category.title}
          <br />
          <strong> ANSWER:</strong> <label></label>
          <form onSubmit={this.handleSubmit}>

            <div>
              <label htmlFor="answer">Enter Answer</label>
              <input
                type="text"
                name="answer"
                value={this.state.formData.answer}
                onChange={this.handleChange}
              />
            </div>



            <button>Submit Form</button>
          </form>
        </div>
      )
    }
    return (
      <div>
        {element}

      </div>
    );
  }
}
export default Jeopardy;
