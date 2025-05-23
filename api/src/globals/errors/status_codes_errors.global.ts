const SERVER_ERRORS_STATUS_CODES = ["500", "501", "503", "504"] as const 

const CLIENT_ERRORS_STATUS_CODES = ["400", "401", "402", "403", "409", "422", "429"] as const;

const SUCCESS_MESSAGE_STATUS_CODES = ["200", "201", "202", "204"] as const;

const REDIRECT_MESSAGE_STATUS_CODES = ["300", "301", "302"] as const; 

export {
    SERVER_ERRORS_STATUS_CODES,
    CLIENT_ERRORS_STATUS_CODES,
    REDIRECT_MESSAGE_STATUS_CODES,
    SUCCESS_MESSAGE_STATUS_CODES,
};
