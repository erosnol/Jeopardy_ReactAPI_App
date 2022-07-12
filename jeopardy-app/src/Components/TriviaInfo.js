const TriviaInfo = (props) => {
    const {category, question, answer, value} = props
    return (
            <div>
                <h2 className="display">Lets play!</h2>
                <button onClick={props.handlegetQuestion}>Get question</button>
                <br />

                <div className="category">
                <h3 className="title">Category</h3>
                <p className="display">{category}</p>

                </div>

                <br />
                <div className="points">
                   <h3 className="title">Points</h3>
                   <p className="display">{value}</p>
                </div>

                <br />
                <div className="question">
                   <h3 className="title">Question</h3>
                   <p className="display">{question}</p>
                </div>

                <br />
                <div className="answer">
                   <h3 className="title">Answer</h3>
                   <p className="display">{answer}</p>
                </div>
                
                
            </div>
    )
}

export default TriviaInfo