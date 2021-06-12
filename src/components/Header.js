import PropTypes from 'prop-types';
import Button from '../components/UI/Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="d-flex justify-content-center mb-4">
      <div className="d-flex align-items-center">
        <h1 className="h2 m-0 me-3">{title}</h1>
        <Button
          className={`${showAdd ? 'btn-secondary' : 'btn-primary'} btn btn-lg`}
          onClick={() => onAdd(!showAdd)}
        >
          {showAdd ? 'Close' : 'Add'}
        </Button>
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
