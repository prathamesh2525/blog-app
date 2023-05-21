import { getPost } from "@/app/getData"
import { data } from "@/data/getData"

const Blog = async ({ params }) => {
  const post = await getPost(params.id)
  const res = data.filter((post) => {
    return post.id === params.id
  })
  console.log(res)

  return <div>page no - {res.id}</div>
}

export default Blog
