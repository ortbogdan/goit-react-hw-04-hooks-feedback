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

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);
  const handleUpdate = (type) => {
    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          handleUpdate={handleUpdate}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={Math.floor((good / total) * 100)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
