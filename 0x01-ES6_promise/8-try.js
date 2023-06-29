function divideFunction(numerator, denominator) {
  try {
    const results = numerator / denominator;
    if (denominator === 0) {
      throw new Error();
    }
    return results;
  } catch (err) {
    throw Error('cannot divide by 0');
  }
}

export default divideFunction;
