
import User from '../models/User.js'; 

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id; 
    const user = await User.findById(userId).select('-password'); 

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user); 
    res.status(500).json({ message: 'Server error', error });
  }catch(err) {
    console.log(err);
  }
};