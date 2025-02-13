const UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

const parseTraffic = (num: number) => {
  if (num < 1000) return [`${Math.round(num)}`, "B"];
  const exp = Math.min(Math.floor(Math.log2(num) / 10), UNITS.length - 1);
  const ret = (num / Math.pow(1024, exp)).toPrecision(3);
  const unit = UNITS[exp];

  return [ret, unit];
};

export default parseTraffic;
