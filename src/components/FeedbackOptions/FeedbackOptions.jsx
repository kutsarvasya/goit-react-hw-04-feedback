import { Button, ListBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options }) {
  const { setGood, setNeutral, setBad } = options;
  return (
    <ListBtn>
      <Button onClick={() => setGood(prev => prev + 1)}>good</Button>
      <Button onClick={() => setNeutral(prev => prev + 1)}>neutral</Button>
      <Button onClick={() => setBad(prev => prev + 1)}>bad</Button>
    </ListBtn>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};
