const buildApiUrl = (baseUrl, source) => {
  return `${baseUrl}/${source}`;
};

const handleApiError = (error) => {
  if (error.response) {
    // server response error
    const responseData = error?.response?.data;
    console.error("Request failed with status code:", error?.response?.status);
    console.error("Response data:", responseData);
    console.error("Response headers:", error?.response?.headers);
    const errorMessage = responseData?.data?.message?.fa;

    if (errorMessage) {
      //specific error messages
      console.error("Error Message:", errorMessage);
    }
    //object with error information
    return {
      status: error.response.status,
      message: errorMessage || "خطایی رخ داده است",
      data: responseData,
    };
  } else if (error.request) {
    // request made but no response received
    console.error("No response received for the request:", error.request);
  } else {
    // Something else happened with request
    console.error("Error setting up the request:", error.message);
  }
  error.message = "خطا در برقراری ارتباط ";
  return error;
};

const buildData = (data, tags, schemaName) => {
  if (tags) {
    return {
      schema: {
        name: schemaName,
        version: "5.7.9",
      },
      tags: tags,
      data: data,
    };
  } else {
    return {
      schema: {
        name: schemaName,
        version: "5.7.9",
      },
      data: data,
    };
  }
};

function getDate(persianDate) {
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const parts = persianDate.trim().split(" ");
  const year = parseInt(parts[2]);
  const month = persianMonths.indexOf(parts[1]) + 1;
  const day = parseInt(parts[0]);
  const monthStr = month.toString().padStart(2, "0");
  const dayStr = day.toString().padStart(2, "0");
  return `${year}-${monthStr}-${dayStr}`;
}

const getDateWithPersianMonth = (date) => {
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const parts = date.split("-");
  const day = parts[2];
  const month = +parts[1];
  return `${day}  ${persianMonths[month]}`;
};

const getTimeFormat = (time) => {
  return `${time}:00`;
};

const getTimeWithoutSecond = (time) => {
  const parts = time.split(":");
  return `${parts[0]}:${parts[1]}`;
};

const buildActivityData = (data, imageIds) => {
  data.date = getDate(data.date);
  data.fromHour = getTimeFormat(data.fromHour);
  data.toHour = getTimeFormat(data.toHour);
  if (imageIds.length > 0) {
    data.imageIds = imageIds;
  }
  return data;
};

export {
  buildApiUrl,
  handleApiError,
  buildData,
  getDate,
  getTimeFormat,
  buildActivityData,
  getTimeWithoutSecond,
  getDateWithPersianMonth,
};
