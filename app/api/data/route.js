import { data } from "@/data/getData"
import { NextResponse } from "next/server"

export async function GET(req) {
  return NextResponse.json(data)
}
