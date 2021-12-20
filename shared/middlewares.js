import colors from 'colors';
const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};
const logger = (req, res, next) => {
    console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`));
    next();
};
const middlewares = {
    requestTime,
    logger
};
export default middlewares;
//# sourceMappingURL=middlewares.js.map