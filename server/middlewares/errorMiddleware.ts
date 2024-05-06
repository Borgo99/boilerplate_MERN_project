import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../../common-ts/apiResponses";
import AppError from "../utils/AppError";

// hard coded MongoServerError to avoid to install mongodb package
interface MongoServerError extends Error {
  index: number;
  code: 11000;
  keyPattern: Record<string, number>;
  keyValue: Record<string, string>;
}

// send error to client
const sendError = (res: Response, errResponse: ErrorResponse): void => {
  res.status(errResponse.statusCode).json(errResponse);
};

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (err.name) {
    // MONGODB ERRORS
    case "ValidationError": // handle validation error
      const message = err.message.split(": ").pop();
      return sendError(res, new ErrorResponse(message!, 400));

    case "CastError": // handle duplicate key error
      return sendError(res, new ErrorResponse(`${err.message}`, 400));

    case "MongoServerError": // handle duplicate key error
      let value;
      if ((err as MongoServerError).keyValue) {
        value = Object.keys((err as MongoServerError).keyValue)[0];
        return sendError(
          res,
          new ErrorResponse(`Invalid ${value}. ${err.stack}`, 400)
        );
      } else {
        return sendError(res, new ErrorResponse(`${err.message}`, 400));
      }

    case "MongooseServerSelectionError": // handle unable to connect to mongo
      return sendError(
        res,
        new ErrorResponse("Internet is not working properly", 400)
      );

    // JWT ERROR
    case "JsonWebTokenError": // handle duplicate jwt malformed
      return sendError(res, new ErrorResponse(err.message, 401));

    // UNEXPECTED ERROR
    default: // handle unknown errors
      if (!(err as AppError).statusCode)
        console.log(`\nUnhandled error ${err.name}\n${err.stack || err}\n`);
      // return sendError(
      //   res,
      //   //@ts-ignore
      //   new ErrorResponse((err as AppError).msg, err.statusCode)
      // );
      break;
  }

  // if err arrives here it means is our AppError
  if (process.env.NODE_ENV === "production") {
    return res.status((err as AppError).statusCode).json({
      status: "error",
      message: (err as AppError).msg,
    } as ErrorResponse);
  }

  res.status((err as AppError).statusCode).json({
    status: "error",
    message: (err as AppError).msg,
    err,
  } as ErrorResponse);
};
