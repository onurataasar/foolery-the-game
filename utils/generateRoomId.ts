export const generateRoomId = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const miliseconds = now.getMilliseconds().toString().padStart(3, "0");
  const roomId = `${hours}${minutes}${seconds}${miliseconds}`;
  return roomId;
};
