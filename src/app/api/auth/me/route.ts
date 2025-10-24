import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const store = await cookies();
  const session = store.get("session");
  const email = store.get("email");
  if (!session || !email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ email: email.value });
}
