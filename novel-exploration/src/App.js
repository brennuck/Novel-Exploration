import React from 'react';

import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            newBook: {
                title: "",
                author: "",
                publisher: "",
                published: "",
                description: "",
                category: "",
                image: "",
                infoLink: ""
            }
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state.input,
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="appContainer">

            </div>
        )
    }
}

export default App;