import { Button, ListBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ListBtn>
      {Object.keys(options).map(el => (
        <Button onClick={onLeaveFeedback} key={el}>
          {el}
        </Button>
      ))}
    </ListBtn>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
