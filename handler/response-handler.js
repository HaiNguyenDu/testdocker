

const responseWithData = (
    res,
    statusCode,
    data,
    message,
    isOk
) => res.status(statusCode).json({ isOk, data, message, statusCode });

export const ok = (
    res,
    data,
    message
) => responseWithData(res, 200, data, message, true);

export const created = (
    res,
    data,
    message
) => responseWithData(res, 201, data, message, true);

export const unauthenticate = (res,message) =>
    responseWithData(res, 401, {}, message, false);

export const unauthorize = (res) =>
    responseWithData(res, 403, {}, "You can't do that!", false);

export const notFound = (res, message) =>
    responseWithData(res, 404, [], message, false);

export const badRequest = (res, message) =>
    responseWithData(res, 400, {}, message, false);

export const error = (res, error) =>
    responseWithData(res, 500, error, "Error in server!", false);

export const badRequestWithData = (res, message,data) =>
    responseWithData(res, 400, data, message, false);
const responseHandler = {
    ok,
    created,
    unauthenticate,
    unauthorize,
    notFound,
    badRequest,
    badRequestWithData,
    error,
};
export default responseHandler;
