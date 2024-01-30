const validateTaskText = (text) => {
  if (!text || typeof text !== 'string') {
    throw new Error('Invalid input: Text is required and must be a string.');
  }

  const cleanedText = text.trim().replace(/\s+/g, ' ').toLowerCase();
  
  return cleanedText;
};

module.exports = validateTaskText