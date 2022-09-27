import LogTypes from "../types/log.enum";
export default {
  CRITICAL: {
    name: LogTypes.CRITICAL,
    dir: process.cwd() + "/src/api/logs/" + LogTypes.CRITICAL + "/",
    level: LogTypes.CRITICAL,
  },
  BASIC: {
    name: LogTypes.BASIC,
    dir: process.cwd() + "/src/api/logs/" + LogTypes.BASIC + "/",
    level: LogTypes.BASIC,
  },
};
