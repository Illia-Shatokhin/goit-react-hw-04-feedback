import { useState } from 'react';
import css from './App.module.css';
import { Statistics } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedback-options/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const newFeedback = e => {
    const key = e.target.innerText.toLowerCase();
    switch (key) {
      case 'good':
        setGood(() => good + 1);
        break;

      case 'neutral':
        setNeutral(() => neutral + 1);
        break;

      case 'bad':
        setBad(() => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + neutral + good;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = ((good / (bad + neutral + good)) * 100).toFixed(0);
    return percent > 0 ? Number(percent) : 0;
  };

  const isFeedbackAreEmpty = () => {
    return good === 0 && neutral === 0 && bad === 0;
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={newFeedback}
        />
      </Section>
      <Section title="Statistics">
        {isFeedbackAreEmpty() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   newFeedback = e => {
//     const key = e.target.innerText.toLowerCase();
//     this.setState({ [key]: this.state[key] + 1 });
//   };

//   countTotalFeedback = () => {
//     return this.state.bad + this.state.neutral + this.state.good;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const percent = (
//       (this.state.good /
//         (this.state.bad + this.state.neutral + this.state.good)) *
//       100
//     ).toFixed(0);
//     return percent > 0 ? Number(percent) : 0;
//   };

//   isFeedbackAreEmpty = () => {
//     return Object.values(this.state).every(value => {
//       return value === 0;
//     });
//   };

//   render() {
//     return (
//       <div className={css.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.newFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.isFeedbackAreEmpty() ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
