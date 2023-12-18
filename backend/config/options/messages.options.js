const MESSAGES = {
    resCode: {
        HTTP_OK: 200,
        HTTP_CREATE: 201,
        HTTP_NO_CONTENT: 204,
        HTTP_BAD_REQUEST: 400,
        HTTP_UNAUTHORIZED: 401,
        HTTP_FORBIDDEN: 403,
        HTTP_NOT_FOUND: 404,
        HTTP_METHOD_NOT_ALLOWED: 405,
        HTTP_CONFLICT: 409,
        HTTP_INTERNAL_SERVER_ERROR: 500,
        HTTP_SERVICE_UNAVAILABLE: 503,
    },
    errorTypes: {
        OAUTH_EXCEPTION: "OAuthException",
        ALREADY_AUTHENTICATED: "AlreadyAuthenticated",
        UNAUTHORISED_ACCESS: "UnAuthorisedAccess",
        INPUT_VALIDATION: "InputValidationException",
        ACCOUNT_ALREADY_EXIST: "AccountAlreadyExistException",
        ACCOUNT_DOES_NOT_EXIST: "AccountDoesNotExistException",
        ENTITY_NOT_FOUND: "EntityNotFound",
        ACCOUNT_BLOCKED: "AccountBlocked",
        ACCOUNT_DEACTIVATED: "AccountDeactivated",
        CONTENT_BLOCKED: "ContentBlocked",
        CONTENT_REMOVED: "ContentRemoved",
        PRIVATE_CONTENT: "PrivateContent",
        PRIVATE_ACCOUNT: "PrivateAccount",
        DUPLICATE_REQUEST: "DuplicateRequest",
        EMAIL_NOT_VERIFIED: "emailNotVerified",
        MOBILE_NUMBER_NOT_VERIFIED: "mobileNumberNotVerified",
        INTERNAL_SERVER_ERROR: "InternalServerError",
    },
    apiErrorStrings: {
        INVALID_REQUEST: "Invalid request",
        SERVER_ERROR: "Oops! something went wrong",
        MOBILE_NUMBER_ALREADY_IN_USE:
            "The Mobile number is already in use. Please try again using a different Mobile number",
        USER_EXISTS: data => `User already exists with this same ${data}`,
        USER_DOES_NOT_EXIST: data => `The ${data} does not exist!`,
        PASSWORD_DOES_NOT_MATCH: "The password does not match.",
        ACCOUNT_BLOCKED: "Your account has been blocked!",
        ACCOUNT_DEACTIVATED: "Your account has been deactivated!",
        USERNAME_ALREADY_IN_USE: "The username you have entered is already associated with an account.",
        USER_BLOCKED: "You're account has been blocked,if you think it's a mistake please contact admin.",
        INVALID_CREDENTIALS: "The email and/or password entered are incorrect",
        INVALID_TOKEN: "Your email verification token is invalid or has expired",
    },
    apiSuccessStrings: {
        ACCOUNT_REGISTRATION: "Registered successfully",
        PASSWORD_RESET: "Your password has been reset",
        PASSWORD_SEND: "Password has been shared to your registered email address",
        LOGOUT_SUCCESS: "Logout successfully!",
        USERNAME_SUCCESS: "User Name available",
        USERNAME_CHANGE: "Your Username has been Changed as ",
        EMAIL_UPDATE: "Your profile email has been changed",
        CREATED: data => `${data} created successfully`,
        ADDED: data => `${data} added successfully`,
        UPDATE: data => `${data} update successfully`,
        STATUS: (data) => `${data} status update successfully`,
        STATUS_CHANGE: (data, status) => `${data} status has been changed to ${status} successfully`,
        DELETED: data => `${data} has been deleted successfully`,
        DATA_ALREADY_EXISTS: data => `${data} already exists`,
        DATA_NOT_EXISTS: data => `${data} does not exists`,
    },
};

module.exports = MESSAGES;