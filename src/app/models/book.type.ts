export type BookType = {
  title: string,
  subtitle: string,
  isbn13: string,
  price: string,
  image: string,
  url: string,
}

export type ResponseBookType = {
  error: number,
  total: number,
  books: BookType[]
}
