import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    let el = e.target.textContent.toLowerCase();
    this.setState(prevState => ({ [el]: prevState[el] + 1 }));
  };

  counterPositivePercentage = () => {
    return Math.ceil(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };
  counterTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={{ good, neutral, bad }}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.counterTotal()}
          positivePercentage={this.counterPositivePercentage()}
        />
      </>
    );
  }
}
