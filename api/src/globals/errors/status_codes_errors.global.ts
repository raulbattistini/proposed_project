const SERVER_ERRORS_STATUS_CODES = ["500", "501", "503", "504"] as const 
// Array.from(
//     { length: 100 },
//     (_, i) => String(i + 500)
// );
const CLIENT_ERRORS_STATUS_CODES = Array.from(
    { length: 100 },
    (_, i) => i + 400
);
const REDIRECT_MESSAGE_STATUS_CODES = Array.from(
    { length: 100 },
    (_, i) => i + 300
);
const SUCCESS_MESSAGE_STATUS_CODES = Array.from(
    { length: 100 },
    (_, i) => i + 200
);
// const INFORMATIONAL_MESSAGE_STATUS_CODES = Array.from({length: 100}, (_, i) => i + 100);

export {
    SERVER_ERRORS_STATUS_CODES,
    CLIENT_ERRORS_STATUS_CODES,
    REDIRECT_MESSAGE_STATUS_CODES,
    SUCCESS_MESSAGE_STATUS_CODES,
};