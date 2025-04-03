import * as Yup from "yup";

const fieldRequired = "Field is required";
const SUPPORTED_FORMATS = ["image/png", "image/jpg", "image/jpeg"];

const SUBMISSION_SUPPORTED_FORMATS = ["image/png", "image/jpg", "image/jpeg"];

export const competitionSchema = Yup.object().shape({
  name: Yup.string().required(fieldRequired),
  startDate: Yup.date().required(fieldRequired),
  endDate: Yup.date().required(fieldRequired),
  icon: Yup.mixed()
    .required(fieldRequired)
    .test(
      "fileFormat",
      "File type must be jpg, jpeg or png",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
  prizeType: Yup.string(),
  prizeValue: Yup.number()
    .required(fieldRequired)
    .min(1, "Must be a positive value"),
  prizeDescription: Yup.string(),
});

export const userSchema = Yup.object().shape({
  userType: Yup.string().required(fieldRequired),
  // firstName: Yup.string().required(fieldRequired).min(3, 'Minimum 3 characters are required'),
  firstName: Yup.string().when("userType", {
    is: (userType) => userType === "personal",
    then: () =>
      Yup.string()
        .required(fieldRequired)
        .min(3, "Minimum 3 characters are required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  lastName: Yup.string().when("userType", {
    is: (userType) => userType === "personal",
    then: () =>
      Yup.string()
        .required(fieldRequired)
        .min(3, "Minimum 3 characters are required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  companyName: Yup.string().when("userType", {
    is: (userType) => userType === "company",
    then: () =>
      Yup.string()
        .required(fieldRequired)
        .min(4, "Minimum 4 characters are required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  countryCode: Yup.string().required(fieldRequired),
  mobileNo: Yup.string()
    .required(fieldRequired)
    .matches(/^\d+$/, "Mobile number must contain only digits")
    .min(10, "Mobile number must be at least 10 digits")
    .max(10, "Mobile number cannot exceed 10 digits"),
  email: Yup.string().email("Invalid email address").required(fieldRequired),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  passwordConfirm: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const updateUserSchema = Yup.object().shape({
  userType: Yup.string().required(fieldRequired),
  firstName: Yup.string().when("userType", {
    is: (userType) => userType === "personal",
    then: () =>
      Yup.string()
        .required(fieldRequired)
        .min(3, "Minimum 3 characters are required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  lastName: Yup.string().when("userType", {
    is: (userType) => userType === "personal",
    then: () =>
      Yup.string()
        .required(fieldRequired)
        .min(3, "Minimum 3 characters are required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  companyName: Yup.string().when("userType", {
    is: (userType) => userType === "company",
    then: () =>
      Yup.string()
        .required(fieldRequired)
        .min(4, "Minimum 4 characters are required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  mobileNo: Yup.string()
    .required(fieldRequired)
    .matches(/^\d+$/, "Mobile number must contain only digits")
    .min(10, "Mobile number must be at least 10 digits")
    .max(10, "Mobile number cannot exceed 10 digits"),
});

export const userLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required(fieldRequired),
  password: Yup.string()
    .required(fieldRequired)
    .min(6, "Password must be at least 6 characters"),
});

export const addContestSchema = Yup.object().shape({
  type: Yup.string().required(fieldRequired),
  logoPdf: Yup.mixed().when("type", {
    is: (type) => type === "logo",
    then: () =>
      Yup.mixed()
        .required(fieldRequired)
        .test(
          "fileFormat",
          "File type must be pdf",
          (value) => !value || (value && "application/pdf" === value.type)
        )
        .test(
          "fileSize",
          "File size must be less than 5 MB",
          (value) => !value || (value && value.size <= 5 * 1024 * 1024)
        ),
    otherwise: () => Yup.mixed().notRequired(),
  }),
  image: Yup.mixed().when("type", {
    is: (type) => type === "logo",
    then: () =>
      Yup.mixed()
        .required(fieldRequired)
        .test(
          "fileFormat",
          "File type must be jpg, jpeg or png",
          (value) =>
            !value ||
            (value && SUBMISSION_SUPPORTED_FORMATS.includes(value.type))
        )
        .test(
          "fileSize",
          "File size must be less than 5 MB",
          (value) => !value || (value && value.size <= 5 * 1024 * 1024)
        ),
    otherwise: () => Yup.mixed().notRequired(),
  }),
  tagline: Yup.string().when("type", {
    is: (type) => type === "marathiTagline" || type === "englishTagline",
    then: () =>
      Yup.string()
        .min(3, "Minimum 3 characters are required")
        .required(fieldRequired)
        .test("max-5-words", "Maximum 5 words are allowed", function (value) {
          if (!value) return true;
          const wordCount = value.trim().split(/\s+/).length;
          return wordCount <= 5;
        }),
    otherwise: () => Yup.string().notRequired(),
  }),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  passwordConfirm: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const forgotPasswordSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^\d{4}$/, "OTP must be a 4-digit number"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  passwordConfirm: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const emailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required(fieldRequired),
});

export const enquirySchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required(fieldRequired),
  name: Yup.string()
    .required(fieldRequired)
    .min(3, "Minimum 3 characters are required"),
  message: Yup.string()
    .required(fieldRequired)
    .min(5, "Minimum 5 characters are required"),
});
export const venderCreateSchema = Yup.object().shape({
  type: Yup.string().required("Type is required"),
  name: Yup.string().required("Name is required"),
  groupCompany: Yup.string().nullable(),
  userName: Yup.string()
    .required("Username is required")
    .min(5, "Minimum length should be 5"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least one letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.object().shape({
    addressLine1: Yup.string().required("Address Line 1 is required"),
    addressLine2: Yup.string().nullable(),
  }),
  city: Yup.string().required("City is required"),
  pinCode: Yup.string()
    .matches(/^\d{6}$/, "Pin Code must be exactly 6 digits")
    .required("Pin Code is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  landLine: Yup.string().nullable(),
  panNo: Yup.string()
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN number format")
    .required("PAN No. is required"),
  gstNo: Yup.string()
    .matches(
      /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/,
      "Invalid GST No."
    )
    .required("GST No. is required"),
  mobileNo: Yup.string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  // contractValid: Yup.date().required(fieldRequired),
  majorProduct: Yup.string().nullable(),
  annualTurnover: Yup.string().when("type", {
    is: (type) => type === "company",
    then: () =>
      Yup.string().required("Annual Turnover is required for companies"),
    otherwise: () => Yup.string().notRequired(),
  }),
  totalEmployee: Yup.string().when("type", {
    is: (type) => type === "company",
    then: () =>
      Yup.string().required("Total Employees is required for companies"),
    otherwise: () => Yup.string().notRequired(),
  }),
  companyProfile: Yup.string().when("type", {
    is: (type) => type === "company",
    then: () =>
      Yup.string().required("Company Profile is required for companies"),
    otherwise: () => Yup.string().notRequired(),
  }),
  designation: Yup.string().when("type", {
    is: (type) => type === "company",
    then: () => Yup.string().required("Designation is required for companies"),
    otherwise: () => Yup.string().notRequired(),
  }),
  majorCustomer: Yup.string(),
  cinNo: Yup.string(),
  isIrs: Yup.string().required("IRS field is required"),
});

export const venderUpdateSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  groupCompany: Yup.string().nullable(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.object().shape({
    addressLine1: Yup.string().required("Address Line 1 is required"),
    addressLine2: Yup.string().nullable(),
  }),
  city: Yup.string().required("City is required"),
  pinCode: Yup.string()
    .matches(/^\d{6}$/, "Pin Code must be exactly 6 digits")
    .required("Pin Code is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  landLine: Yup.string().nullable(),
  panNo: Yup.string()
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN number format")
    .required("PAN No. is required"),
  gstNo: Yup.string()
    .matches(
      /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/,
      "Invalid GST No."
    )
    .required("GST No. is required"),
  mobileNo: Yup.string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  majorProduct: Yup.string().nullable(),
  annualTurnover: Yup.string().when("type", {
    is: (type) => type === "company",
    then: () =>
      Yup.string().required("Annual Turnover is required for companies"),
    otherwise: () => Yup.string().notRequired(),
  }),
  totalEmployee: Yup.string().when("type", {
    is: (type) => type === "company",
    then: () =>
      Yup.string().required("Total Employees is required for companies"),
    otherwise: () => Yup.string().notRequired(),
  }),
  companyProfile: Yup.string().when("type", {
    is: (type) => type === "company",
    then: () =>
      Yup.string().required("Company Profile is required for companies"),
    otherwise: () => Yup.string().notRequired(),
  }),
  designation: Yup.string().when("type", {
    is: (type) => type === "company",
    then: () => Yup.string().required("Designation is required for companies"),
    otherwise: () => Yup.string().notRequired(),
  }),
  majorCustomer: Yup.string().nullable(),
  cinNo: Yup.string().nullable(),
  isIrs: Yup.string().required("IRS field is required"),
});

export const createTenderSchema = Yup.object().shape({
  name: Yup.string()
    .required(fieldRequired)
    .min(3, "Minimum 3 characters are required"),
  description: Yup.string(),
  tendorPdf: Yup.mixed()
    .required(fieldRequired)
    .test(
      "fileFormat",
      "File type must be pdf",
      (value) => !value || (value && "application/pdf" === value.type)
    )
    .test(
      "fileSize",
      "File size must be less than 50 MB",
      (value) => !value || (value && value.size <= 50 * 1024 * 1024)
    ),
  startDate: Yup.date().required(fieldRequired),
  endDate: Yup.date().required(fieldRequired),
  tenderType: Yup.string().required(fieldRequired),
  participateAmount: Yup.string().when("tenderType", {
    is: (tenderType) => tenderType === "RFP Tender",
    then: () =>
      Yup.number()
        .min(2, "Minimum 2 digits are required")
        .required(fieldRequired),
    otherwise: () => Yup.number().notRequired(),
  }),
});

export const tenderSubmissionSchema = Yup.object().shape({
  tendorType: Yup.string(),
  uploadedDocument: Yup.mixed()
    .required(fieldRequired)
    .test(
      "fileFormat",
      "File type must be pdf",
      (value) => !value || (value && "application/pdf" === value.type)
    )
    .test(
      "fileSize",
      "File size must be less than 50 MB",
      (value) => !value || (value && value.size <= 50 * 1024 * 1024)
    ),
  financialDocument: Yup.mixed()
    .required(fieldRequired)
    .test(
      "fileFormat",
      "File type must be pdf",
      (value) => !value || (value && "application/pdf" === value.type)
    )
    .test(
      "fileSize",
      "File size must be less than 50 MB",
      (value) => !value || (value && value.size <= 50 * 1024 * 1024)
    ),
  paymentReceipt: Yup.mixed().when("tendorType", {
    is: (tendorType) => tendorType === "RFP Tender",
    then: () =>
      Yup.mixed()
        .required(fieldRequired)
        .test(
          "fileFormat",
          "File type must be jpg, jpeg or png",
          (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
        ),
    otherwise: () => Yup.mixed().notRequired(),
  }),
});

export const venderLoginSchema = Yup.object().shape({
  userName: Yup.string().required(fieldRequired),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const adminSettingSchema = Yup.object().shape({
  primaryPhone: Yup.string()
    .required(fieldRequired)
    .matches(/^\d+$/, "Mobile number must contain only digits")
    .min(10, "Mobile number must be at least 10 digits")
    .max(10, "Mobile number cannot exceed 10 digits"),
  secondaryPhone: Yup.string()
    .required(fieldRequired)
    .matches(/^\d+$/, "Mobile number must contain only digits")
    .min(10, "Mobile number must be at least 10 digits")
    .max(10, "Mobile number cannot exceed 10 digits"),
});

export const careerSchema = Yup.object().shape({
  title: Yup.string()
    .required(fieldRequired)
    .min(15, "Minimum 15 characters are required"),
  location: Yup.string().required(fieldRequired),
  description: Yup.string()
    .required(fieldRequired)
    .min(30, "Minimum 30 characters are required"),
  jobType: Yup.string().required(fieldRequired),
  fileAttachment: Yup.mixed()
    .required(fieldRequired)
    .test(
      "fileFormat",
      "File type must be pdf",
      (value) => !value || (value && "application/pdf" === value.type)
    )
    .test(
      "fileSize",
      "File size must be less than 5 MB",
      (value) => !value || (value && value.size <= 5 * 1024 * 1024)
    ),
});

export const blogSchema = Yup.object().shape({
  title: Yup.string()
    .required(fieldRequired)
    .min(15, "Minimum 15 characters are required"),
  description: Yup.string()
    .required(fieldRequired)
    .min(30, "Minimum 30 characters are required"),
  hrefLink: Yup.string().required(fieldRequired).url("Invalid URL format"),
  imageAttachment: Yup.mixed()
    .required(fieldRequired)
    .test(
      "fileFormat",
      "File type must be jpg, jpeg or png",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});

export const gallerySchema = Yup.object().shape({
  filePath: Yup.mixed()
    .required(fieldRequired)
    .test(
      "fileFormat",
      "File type must be jpg, jpeg or png",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});
