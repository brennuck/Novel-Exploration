import React from 'react';
import './App.css';

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
            ],
            showing: false,
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
                <h1>Novel Exploration</h1>
                <div className="inputBox">
                    <input
                        type="string"
                        name="input"
                        value={this.state.input}
                        onChange={this.handleChanges}
                        placeholder="Enter book here"
                    />
                    <button onClick={this.handleConvert}>Explore</button>
                </div>
                <div className="bookGridContainer">
                    {this.state.newBook.map((book) => {
                        if (book.volumeInfo?.authors !== undefined) {
                            return (
                                <div className="bookGrid">
                                    <div className="row">
                                        <div className="bookTitle"> <strong>{book.volumeInfo?.title}</strong> </div>
                                        <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="bookcover" />
                                        <div className="sectional2">
                                            <div className="bookAuthor"> <strong>Author:</strong> {book.volumeInfo?.authors[0]} </div>
                                            <div className="bookPublisher"> <strong>Publisher:</strong> {book.volumeInfo?.publisher} </div>
                                            <div className="bookPublished"> <strong>Published:</strong> {book.volumeInfo?.publishedDate} </div>
                                            <div className="bookCat"> <strong>Category:</strong> {book.volumeInfo?.categories[0]} </div>
                                        </div>
                                    </div>
                                    {/* <span> {book.volumeInfo?.infoLink} </span> */}
                                </div>
                            )
                        } else {
                            return (
                                <div className="bookGrid">
                                    <div className="row">
                                        <div className="bookTitle"> <strong>{book.volumeInfo?.title}</strong> </div>
                                        <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="bookcover" />
                                        <div className="sectional2">
                                            <div className="bookPublisher"> <strong>Publisher:</strong> {book.volumeInfo?.publisher} </div>
                                            <div className="bookPublished"> <strong>Published:</strong> {book.volumeInfo?.publishedDate} </div>
                                            <div className="bookCat"> <strong>Category:</strong> {book.volumeInfo?.categories[0]} </div>
                                        </div>
                                        {/* <span> {book.volumeInfo?.infoLink} </span> */}
                                    </div>
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