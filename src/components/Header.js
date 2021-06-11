import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="d-flex justify-content-center mb-4">
      <div className="d-flex justify-content-center">
        <h1>{title}</h1>
        <Button
          buttonStyle={showAdd ? 'btn-secondary' : 'btn-primary'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={() => onAdd(!showAdd)}
        />
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
