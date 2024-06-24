export interface ICheckUserNamePayload {
  username: string;
}

export interface ICheckUserNameResponse {
  isAvailable: boolean;
}

export interface ISubmitFormPayload {
  country: string | null;
  username: string | null;
  birthday: Date | null;
}

export interface ISubmitFormResponse {
  result: string;
}
