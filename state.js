import react, { Component } from 'react'

class Fun extends Component {
    state = {
        name: "Joshi"
    }
    render() {
        return (
            <div>
                <h1>I am manohar {this.state.name}</h1>
            </div>
        )

    }
}
export default Fun
