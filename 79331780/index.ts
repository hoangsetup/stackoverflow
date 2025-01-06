import { DateTime, Interval } from "luxon";

console.log(
    Interval
    .fromDateTimes(DateTime.fromSeconds(0), DateTime.fromSeconds(315))
    .toDuration(['minutes', 'seconds'])
    .toHuman({ unitDisplay: "short" })
)