const Button = ({ className, onClick, type, children }) => {
  return (
      <button
        onClick={onClick}
        className={className}
        type={type || 'button'}
      >
        {children}
      </button>
  );
};

export default Button;
