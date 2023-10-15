const secondsFormatter = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const remainingSeconds = seconds % 60;

  return `${hours} : ${minutes} : ${remainingSeconds}`;
};

export default secondsFormatter;
