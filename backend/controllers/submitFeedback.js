

// Controller to handle user feedback submission
export const submitFeedback = async (req, res) => {
  const { rating, comment } = req.body;

  try {
    // The user is already authenticated and attached to req.user by verifyJWT
    const user = req.user; 

    // Update user's rating and comment fields
    user.rating = rating || user.rating; // If no rating is provided, keep the existing one
    user.comment = comment || user.comment; // If no comment is provided, keep the existing one

    // Save the updated user document
    await user.save();

    return res.status(200).json({ message: 'Feedback submitted successfully', user });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return res.status(error.statusCode || 500).json({ message: error.message || 'An error occurred while submitting feedback' });
  }
};
