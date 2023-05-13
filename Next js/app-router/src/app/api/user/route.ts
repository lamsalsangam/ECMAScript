// Previously
// const handler = (req, res) => {};
// export default handler;

import { NextRequest } from "next/server";

// Now
// It is important it must be named export not the default one

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mysearchparam = searchParams.get("mysearchparam");
  console.log("GET REQUEST");
  //   res.status(200).json({});
  // ################
  // return new Response('Ok')
  return new Response(JSON.stringify({ name: "sangam" }), {
    status: 401,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("POST REQUEST", body);

  return new Response("OK");
}
