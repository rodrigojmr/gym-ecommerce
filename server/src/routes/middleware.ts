import StatusCodes from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import { cookieProps } from '@servershared/constants';
import { JwtService } from '@servershared/JwtService';

const jwtService = new JwtService();
const { UNAUTHORIZED } = StatusCodes;

// Middleware to verify if user is an admin
// export const adminMW = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
// try {
//   // Get json-web-token
//   const jwt = req.signedCookies[cookieProps.key];
//   if (!jwt) {
//     throw Error('JWT not present in signed cookie.');
//   }
//   // Make sure user role is an admin
//   const clientData = await jwtService.decodeJwt(jwt);
//   if (clientData.role === UserRoles.Admin) {
//     res.locals.userId = clientData.id;
//     next();
//   } else {
//     throw Error('JWT not present in signed cookie.');
//   }
// } catch (err) {
//   next(err);
//   //   return res.status(UNAUTHORIZED).json({
//   //   error: err.message
//   // });
// }
// };
