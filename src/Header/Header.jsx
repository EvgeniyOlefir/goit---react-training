import PropTypes from "prop-types";

const Header = (props) => {
  const { someNumber, someText } = props;
  const isMoreThan = someNumber > 10;

  return (
    <>
      {isMoreThan ? <h1>{someNumber} more than 10</h1> : <h1>{someNumber} less than 10</h1>}
      <p>Hello{someText}</p>
    </>
  );
};

Header.prototype = {
  someNumber: PropTypes.number.isRequired,
};

Header.defaultProps = {
  someText: "Anonimus",
  someNumber: 15,
};

export default Header;
