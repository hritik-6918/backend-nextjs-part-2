import { users } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, par) {
  const singleData = users.filter((item) => item.id == par.params.id);

  if (singleData.length === 0) {
    return NextResponse.json({ message: "No data found" }, { status: 404 });
  }
  return NextResponse.json(singleData);
}
