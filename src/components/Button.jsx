import PropTypes from 'prop-types';

export default function Button({ children, isActive, ...props }) {
  return (
    <a className={isActive ? 'active' : ''} {...props}>
      {children}
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};
