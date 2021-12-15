import { Response, NextFunction, Request } from 'express';
declare const middlewares: {
    requestTime: (req: Request, res: Response, next: NextFunction) => void;
    logger: (req: Request, res: Response, next: NextFunction) => void;
};
export default middlewares;
