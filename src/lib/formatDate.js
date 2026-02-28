export const formatDate = value => {
  const d = new Date(value)
  return d.toISOString().split("T")[0] // YYYY-MM-DD
}