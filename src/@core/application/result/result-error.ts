import { ResultStatus } from './result-status';

export class ResultError {
  public readonly errorMessage: string;
  public readonly status: ResultStatus.ERROR = ResultStatus.ERROR;

  public constructor(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
