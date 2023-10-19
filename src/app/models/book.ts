export type Book = {
  title: string,
  subtitle: string,
  isbn13: string,
  price: string,
  image: string,
  url: string,
  isInCart?: boolean,
}

export type ResponseBook = {
  error: number,
  total: number,
  books: Book[]
}
