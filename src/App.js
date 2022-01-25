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

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          onGoodFeedback={setGood}
          onNeutralFeedback={setNeutral}
          onBadFeedback={setBad}
        />
        {/* <div>
      <button type="button" onClick={()=>setGood(good+1)}>Good</button>
      <button type="button" onClick={()=>setNeutral(neutral+1)}>Neutral</button>
      <button type="button" onClick={()=>setBad(bad+1)}>Bad</button>
        </div> */}
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={Math.floor((good / total) * 100)}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};

export default App;
