function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

module.exports = { isValidShift };
