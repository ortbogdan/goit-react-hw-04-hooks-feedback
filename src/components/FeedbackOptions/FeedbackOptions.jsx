import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
}) => {
  const handleClick = (event, callback) => {
    event.target.blur();
    callback((prev) => prev + 1);
  };
  return (
    <div>
      <Button type="button" onClick={(e) => handleClick(e, onGoodFeedback)}>
        Good
      </Button>
      <Button type="button" onClick={(e) => handleClick(e, onNeutralFeedback)}>
        Neutral
      </Button>
      <Button type="button" onClick={(e) => handleClick(e, onBadFeedback)}>
        Bad
      </Button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onGoodFeedback: PropTypes.func.isRequired,
  onNeutralFeedback: PropTypes.func.isRequired,
  onBadFeedback: PropTypes.func.isRequired,
};
