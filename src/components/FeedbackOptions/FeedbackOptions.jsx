import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, handleUpdate }) => {
  const handleClick = (event, type) => {
    event.target.blur();
    handleUpdate(type);
  };
  return (
    <div>
      {Object.keys(options).map((type) => (
        <Button key={type} type="button" onClick={(e) => handleClick(e, type)}>
          {type}
        </Button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};
