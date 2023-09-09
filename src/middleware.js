const { NextRequest, NextFetchEvent, NextResponse } = require("next/server");

const RESTRICTED_COUNTRIES = ["PH", "US"];

async function middleware(request, _next) {
  const res = NextResponse.next();
  const country = request.geo?.country ?? "";

  if (RESTRICTED_COUNTRIES.includes(country)) {
    return NextResponse.rewrite(new URL("/restricted", request.url));
  }

  return res;
  console.log("====================================");
  console.log(res, "rest abeg");
  console.log("====================================");
}

module.exports = {
  middleware,
};
