const Button = ({ buttonStyle, text, onClick }) => {
  return (
    <div className="col-1 mx-auto">
      <button onClick={onClick} className={`${buttonStyle} btn btn-lg`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
