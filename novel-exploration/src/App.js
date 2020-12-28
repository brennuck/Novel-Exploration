import React from 'react';

import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            newBook: [
                {
                    title: "",
                    author: [],
                    publisher: "",
                    published: "",
                    description: "",
                    category: "",
                    image: "",
                    infoLink: ""
                }
            ]
        }
        this.handleConvert = this.handleConvert.bind(this)
    }

    handleConvert() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.input}`)
        .then(res => {
            this.setState({
                newBook: res.data.items
            })
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
                <div>
                    <input
                        type="string"
                        name="input"
                        value={this.state.input}
                        onChange={this.handleChanges}
                    />
                    <button onClick={this.handleConvert}>click</button>
                </div>
                <div>
                    {this.state.newBook.map((book) => {
                        if (book.volumeInfo?.authors !== undefined) {
                            return (
                                <div>
                                    <span> {book.volumeInfo?.title} </span>
                                    <span> {book.volumeInfo?.authors[0]} </span>
                                    <span> {book.volumeInfo?.publisher} </span>
                                    <span> {book.volumeInfo?.publishedDate} </span>
                                    <span> {book.volumeInfo?.description} </span>
                                    <span> {book.volumeInfo?.categories[0]} </span>
                                    <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="bookcover" />
                                    {/* <span> {book.volumeInfo?.infoLink} </span> */}
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <span> {book.volumeInfo?.title} </span>
                                    <span> {book.volumeInfo?.publisher} </span>
                                    <span> {book.volumeInfo?.publishedDate} </span>
                                    <span> {book.volumeInfo?.description} </span>
                                    <span> {book.volumeInfo?.categories[0]} </span>
                                    <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="bookcover" />
                                    {/* <span> {book.volumeInfo?.infoLink} </span> */}
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default App;