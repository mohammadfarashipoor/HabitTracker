const activityTypeTag = (userId) => {
  return {
    userId: userId,
    type: "activityType",
  };
};

const activityTag = (userId, date) => {
  const parts = date.split("-");
  return {
    userId: userId,
    type: "activity",
    year: parts[0],
    month: parts[1],
    day: parts[2],
  };
};

const eventTag = (userId, date) => {
  const parts = date.split("-");
  return {
    userId: userId,
    type: "activity",
    year: parts[0],
    month: parts[1],
    day: parts[2],
  };
};

export { activityTypeTag, activityTag, eventTag };
