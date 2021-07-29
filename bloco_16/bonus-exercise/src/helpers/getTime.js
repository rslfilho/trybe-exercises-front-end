const getTime = () => {
  const NUMBER_TEN = 10;
  const date = new Date();

  const hour = date.getHours() < NUMBER_TEN ? `0${date.getHours()}` : date.getHours();
  const minute = date.getMinutes() < NUMBER_TEN
    ? `0${date.getMinutes()}` : date.getMinutes();
  const second = date.getSeconds() < NUMBER_TEN
    ? `0${date.getSeconds()}` : date.getSeconds();
  const time = `${hour}:${minute}:${second}`;

  return time;
};

export default getTime;
