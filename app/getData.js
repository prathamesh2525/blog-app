export const getAllPosts = async () => {
  const res = await fetch("http://localhost:3000/api/data")

  if (!res.ok) return new Error("Something went wrong")

  return await res.json()
}

export const getPost = async (id) => {
  const res = await fetch(`http://localhost:3000/api/data/${id}`)

  if (!res.ok) return new Error("Something went wrong")

  return await res.json()
}
