type CodeEnum = 200 | 201 | 400 | 401 | 404 | 500;

class ApiResponse {
  status: string;
  message: string;
  statusCode: CodeEnum;

  constructor(status: string, message: string, statusCode?: CodeEnum) {
    this.status = status;
    this.message = message;
    this.statusCode = statusCode;
  }
}

class ErrorResponse extends ApiResponse {
  err?: Error;
  redirect?: string;
  constructor(message: string, statusCode: CodeEnum = 400, err?: Error) {
    super("error", message, statusCode);
    this.err = err;
  }
  public redirectTo(url: string) {
    this.redirect = url;
    return this;
  }
}

class ServerResponse extends ApiResponse {
  data: object;

  constructor(message?: string, statusCode: CodeEnum = 200) {
    super("success", message, statusCode);
  }

  public setData(data: object) {
    this.data = data;
    return this;
  }
}

export { ErrorResponse, ServerResponse, ApiResponse };
