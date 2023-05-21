import { getAllPosts } from "@/app/getData"
import { NextResponse } from "next/server"

export async function GET(res, { params }) {
  const posts = await getAllPosts()
  const result = posts.filter((posts) => {
    return posts.id === params.id
  })
  return NextResponse.json(result)
}
