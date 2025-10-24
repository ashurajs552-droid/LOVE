import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json().catch(() => null) as { email?: string; password?: string } | null;
  const email = data?.email?.trim();
  const password = data?.password?.trim();
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
  }
  const secure = process.env.NODE_ENV === "production";
  const res = NextResponse.json({ ok: true });
  res.cookies.set("session", "1", { httpOnly: true, sameSite: "strict", secure, path: "/" });
  res.cookies.set("email", email, { httpOnly: true, sameSite: "strict", secure, path: "/" });
  return res;
}
