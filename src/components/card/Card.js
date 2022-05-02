import { useState } from 'react';
import Button from '../button/Button';
import './Card.css';

export default function Card({ title, question, answer, bookmarked, tags }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className="card">
      <svg
        className={`card__bookmark ${
          bookmarked ? 'card__bookmark--bookmarked' : ''
        }`}
        viewBox="0 0 384 512"
        fill="currentColor"
      >
        <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" />
      </svg>
      <h2 className="card__title">{title}</h2>
      <p className="card__question" hidden={!showAnswer}>
        {question}
      </p>
      <p className="card__answer" hidden={showAnswer}>
        {answer}
      </p>
      <Button className="btn--show" onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide' : 'Show'} answers
      </Button>
      <div className="card__tags">
        {tags.map(tag => (
          <div className="card__tags__tag">{tag}</div>
        ))}
      </div>
    </section>
  );
}
