import React from 'react'

function Display(props){
    let element = "loading..."

    if (this.props.data.category !== undefined) {
      element = (
        <div>
          <strong>QUESTION:</strong> {this.props.data.question}
          <br />
          <strong>POINT VALUE:</strong> {this.props.data.value}
          <br />
          <strong>TITLE:</strong> {this.props.data.category.title}
          <br />
          <strong> ANSWER:</strong> <label></label>
          <form onSubmit={this.handleSubmit}>

            <div>
              <label htmlFor="answer">Enter Answer</label>
              <input
                type="text"
                name="answer"
                value={this.props.formData.answer}
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

export default Display;