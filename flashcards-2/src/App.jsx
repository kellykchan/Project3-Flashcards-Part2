import './App.css';
import cards from './components/Cards';
import { useState } from 'react';

const App = () => {

  const [sequence, setSequence] = useState(cards.map((_, index) => index));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);


  const resetCard = () => {
    setFlipped(false);
    setGuess('');
    setFeedback('');
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffleCard = () => {
    const newSequence = shuffleArray(cards.map((_, index) => index));
    setSequence(newSequence);
    setCurrentIndex(0);
    resetCard();
  };

  const nextCard = () => {
    if (currentIndex < sequence.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetCard();
    }
  };

  const backCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetCard();
    }
  };

  const handleSubmit = () => {
    const normalize = (text) =>
      text.toLowerCase().replace(/[^\w\s]/gi, '').trim();

    const userGuess = normalize(guess);
    const correctAnswer = normalize(card.answer);

    const guessWords = userGuess.split(' ');
    const answerWords = correctAnswer.split(' ');

    const isCorrect =
      userGuess.length > 0 &&
      guessWords.every(word => answerWords.includes(word));

    if (isCorrect) {
      setFeedback('Correct!');
      setFlipped(true);

      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);

      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setFeedback('Incorrect!');
      setCurrentStreak(0);
    }
  };

  const card = cards[sequence[currentIndex]];

  return (
    <div className="App">
    <h1>Labubu Learning</h1>
    <h2>How well do you know about Labubus? Test your knowledge about these little creatures!</h2>
    <div className="streak-info">
      <h3>Number of Cards: {cards.length}</h3>
      <h3>Current Streak: {currentStreak}</h3>
      <h3>Longest Streak: {longestStreak}</h3>
    </div>

    <div
      className={`flashcard ${flipped ? "flipped" : ""} ${card.difficulty}`}
      onClick={() => setFlipped(!flipped)}
    >
      {flipped ? (
        <div>
          <p>{card.answer}</p>
          {card.img && <img src={card.img} alt={card.answer} className="card-image" />}
        </div>
      ) : (
        <p>{card.question}</p>
      )}
    </div>

    <div className="guess-section">
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
        className={`guess-input ${feedback === 'Correct!' ? 'correct' : feedback ? 'incorrect' : ''}`}
      />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>

    <div className="navigation-buttons">
      <button
        onClick={backCard}
        disabled={currentIndex === 0}
        className={currentIndex === 0 ? "disabled" : ""}
      >
        ←
      </button>

      <button
        onClick={nextCard}
        disabled={currentIndex === sequence.length - 1}
        className={currentIndex === sequence.length - 1 ? "disabled" : ""}
      >
        →
      </button>

      <button onClick={shuffleCard}>Shuffle</button>
    </div>
  </div>

  )
}

export default App