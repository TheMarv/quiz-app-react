import './Button.js';

export default function Button({ className, children, onClick }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
