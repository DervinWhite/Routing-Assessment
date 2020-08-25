import React from 'react'
class TestFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCharacter: {},
            currentNumber: 1
        }
    }
    componentDidMount() {
        this.myTestFetch()
        // console.log("hello from component did mount")
    }
    myTestFetch() {
        fetch("https://swapi.dev/api/people/" + this.state.currentNumber)
            .then(response => {
                // console.log(response)
                return response.json()
            }).then(characterData => {
                console.log(characterData)
                this.setState({ currentCharacter: characterData })
            }).catch((error)=>{
                console.log(error)
            })
    }
    clickHandler = () => {
        // console.log("hello")
        this.setState((prevState, props) => {
            return { currentNumber: prevState.currentNumber + 1 }
        }, this.myTestFetch)
    }
    render() {
        let element = (
            <div className="TestFetch">
                LOADING...
            </div>
        )
        if (this.state.currentCharacter.films !== undefined) {
            element = (
                <div className="TestFetch">
                    Name: {this.state.currentCharacter.name}
                    <br />
                    Height: {this.state.currentCharacter.height}
                    <br />
                    Films: {this.state.currentCharacter.films.map((filmURL, index)=>{
                        return <div key={index}>{filmURL}</div>
                    })}
                    <button onClick={this.clickHandler}>Next Character</button>
                </div>
            )
        }
        return (
            element
        )
    }
}
export default TestFetch;
































































































