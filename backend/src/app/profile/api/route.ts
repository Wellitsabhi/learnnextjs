// import { type NextRequest } from "next/server";

// export async  function GET(request: NextRequest) {
//     const requestHeaders =  new Headers(request.headers);
//     console.log(requestHeaders.get("Authorization"));
//     return new Response("Profile API data!");
// }

// import { request } from "http";
// import { headers } from "next/headers";

// export async function GET() {
//   const headerList = headers();
//   console.log(headerList.get("Authorization"));
//   return new Response("<h1> Profile API data! </h1>", {
//     headers: {
//       "Content-Type": "text/html",
//     },
//   });
// }


import { NextRequest } from "next/server";
import { cookies } from "next/headers";    

export async  function GET(request: NextRequest) {

    cookies().set("resultsperpage","20");
    console.log(cookies().get("resultsperpage"));

    return new Response("Profile API data!");
}
