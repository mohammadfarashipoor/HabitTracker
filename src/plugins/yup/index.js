import * as yup from "yup";
yup.setLocale({
  mixed: {
    required: "پر کردن فیلد الزامی است",
  },
});

const activityModalSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
  date: yup.string().required(),
  fromHour: yup.string().required(),
  toHour: yup.string().required(),
  // activityType: yup.string().required(),
  activityType: yup.string(),
});

const activityTypeModalSchema = yup.object({
  title: yup.string().required(),
});

const eventModalSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
  date: yup.string().required(),
  fromHour: yup.string().required(),
});

const loginFormSchema = yup.object({
  email: yup
    .string()
    .required()
    .test("valid-email", "ایمیل وارد شده باید معتبر باشد", (value) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ),
  password: yup.string().required(),
});

const signupFormSchema = yup.object({
  email: yup
    .string()
    .required()
    .test("valid-email", "ایمیل وارد شده باید معتبر باشد", (value) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ),
  password: yup
    .string()
    .required()
    .min(8, "رمز عبور باید حداقل هشت کاراکتر باشد")
    .matches(
      "^(?=.*[A-Z])(?=.*[a-z]).{8,}$",
      " رمز عبور باید شامل  حداقل یک حرف بزرگ و کوچک باشد"
    ),
});

const informationFormSchema = yup.object({
  name: yup
    .string()
    .required()
    .matches(
      "^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5]+$",
      "لطفا فقط از حروف فارسی استفاده کنید"
    ),
  age: yup
    .number()
    .typeError("لطفا سن خود را فقط به عدد وارد کنید")
    .required()
    .positive("لطفا سن خود را فقط به عدد مثبت وارد کنید")
    .integer("لطفا سن خود را فقط به عدد وارد کنید"),
});

export const validationSchema = {
  activityModalSchema,
  eventModalSchema,
  loginFormSchema,
  signupFormSchema,
  informationFormSchema,
  activityTypeModalSchema,
};
