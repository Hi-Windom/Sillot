import { parse, format } from "date-fns";

export function parseNumber2FormatString(dateString: string, f: string) {
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);
  const hour = dateString.slice(8, 10);
  const minute = dateString.slice(10, 12);
  const second = dateString.slice(12);

  const dateObject = new Date(
    year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second
  );
  let result = format(dateObject, f);
  console.log(result);
  return result;
}
