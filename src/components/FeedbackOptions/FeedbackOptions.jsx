import PropTypes from 'prop-types';
import './Feedback.module.css';
 
export const FeedbackOptions = ({ }) => {
    const stateArr = Object.keys(options);

    return (
        <div>
            {stateArr.map(option => (
                <button
                    key={option}
                    type="button"
                    name={option}
                    onClick={ () => onLeaveFeedback(option)}
            ))}
        </div>
    );
 };



FeedbackOptions.propTyes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
};