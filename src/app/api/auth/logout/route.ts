import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const url = new URL(req.url);
  const res = NextResponse.json({ ok: true });
  res.cookies.set("session", "", { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", expires: new Date(0) });
  res.cookies.set("email", "", { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", expires: new Date(0) });

  if (url.searchParams.get("redirect")) {
    return NextResponse.redirect(new URL("/", url.origin), { status: 303 });
  }
  return res;
}
