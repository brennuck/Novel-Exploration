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

    handleConvert() {
        axios({
            "method": "GET",
            "url": `https://www.googleapis.com/books/v1/volumes?q=${this.state.input}`,
            "headers": {
                "content-type":"application/json",
                "key": "AIzaSyDlS-3kf8VMTRNlCfEPTGTD12b71ERxPgI",
                "accept":"application/json",
                "useQueryString":true
            }
        })
        .then(res => {
            console.log("res", res);
        })
        .catch(err => {
            console.log("Handle Convert Error", err);
        })
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