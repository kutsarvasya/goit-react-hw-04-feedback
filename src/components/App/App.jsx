import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const counterPositivePercentage = () => {
    return Math.ceil((good / (good + neutral + bad)) * 100);
  };

  const counterTotal = () => {
    return good + neutral + bad;
  };

  return (
    <>
      <FeedbackOptions options={{ setGood, setNeutral, setBad }} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={counterTotal()}
        positivePercentage={counterPositivePercentage()}
      />
    </>
  );
}
