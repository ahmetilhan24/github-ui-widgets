import fs from "fs";
import logConstants from "../constants/log.constants";
import LogTypes from "../types/log.enum";
import dayjs from "dayjs";
class ErrorHandler {
  private createLog = (type: string, msg: unknown): void => {
    fs.writeFileSync(
      logConstants[type.toUpperCase()].dir +
        `${type + "_" + dayjs().format()}.log`,
      JSON.stringify(msg)
    );
  };
  public critical = (err: unknown): void => {
    this.createLog(LogTypes.CRITICAL, err);
  };
  public basic = (err: unknown): void => {
    this.createLog(LogTypes.BASIC, err);
  };
}

export default new ErrorHandler();
