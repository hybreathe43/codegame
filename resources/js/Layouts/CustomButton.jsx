import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ children, type, onClick, style, disabled }) => (
    <Button
        variant="contained"
        type={type ?? 'submit'}
        onClick={onClick}
        style={{ ...style, }}
        disabled={disabled}
    >
        {children}
    </Button>
);

CustomButton.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
};

export default CustomButton;
