# Ratelimits
Somelist utilizes ratelimits to ensure that all developers can use the API consistantly. Without ratelimits, developers might over-run the server and crash it.

## Values
All developers will have the **same** values. The values are:
- 10 requests per Second
- 500 requests per Day

Exceeding ratelimits will place a `429 ratelimited` error ban on your server for an unspecified amount of time.

:::tip Info
The information here is subjected to change. Check back regularly if you are experiencing issues with our API.
:::