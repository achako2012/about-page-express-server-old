import colors from 'colors';
import { Response, NextFunction, Request } from 'express';

const requestTime = (req: Request, res: Response, next: NextFunction) => {
  req.requestTime = Date.now();
  next();
};

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`));
  next();
};

const middlewares = {
  requestTime,
  logger,
};

export default middlewares;
