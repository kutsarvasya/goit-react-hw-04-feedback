import { List, Title } from './Statistics.styled';
import PropTypes from 'prop-types';
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <Title>Statistics</Title>
      <List>
        {!total ? (
          <h3>There is no feedback</h3>
        ) : (
          <>
            <div>Good:{good}</div>
            <div>Neutral:{neutral}</div>
            <div>Bad:{bad}</div>
            <div>Total:{total}</div>
            <div>Positive feedback:{positivePercentage}%</div>
          </>
        )}
      </List>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
