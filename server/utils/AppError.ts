class AppError extends Error {
  msg: string;
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    this.msg = message;
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
