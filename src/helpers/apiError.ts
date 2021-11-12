interface ApiError {
  code: string;
}

function isApiError(x: any): x is ApiError {
  return typeof x.code === 'string';
}

export function getApiErrorCode(error: any): string {
  if (isApiError(error)) {
    return error.code;
  } else {
    return 'Unknown error';
  }
}
