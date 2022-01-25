import { useState, useEffect } from "react";
import {
  Section,
  FeedbackOptions,
  Statistics,
  Notification,
} from "./components";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);
  //   state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }
  const handleClick = (event) => {
    const name = event.target.name;
    console.log(name);
  };

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};

export default App;
