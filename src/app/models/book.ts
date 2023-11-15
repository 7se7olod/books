export type Book = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
  counterBooks?: number;
};

export type ResponseBook = {
  error: number;
  total: number;
  books: Book[];
};

export type Cart = {
  [id: string]: number;
};
