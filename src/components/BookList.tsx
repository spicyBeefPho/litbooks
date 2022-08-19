import { useQuery } from "react-query";
import React from "react";
import BookCollection from "./BookCollection";

const BookList = () => {
  // Fetcher Function
  const getBookList = async () => {
    const API_Key = process.env.NEXT_PUBLIC_API_KEY;
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:"kurt+vonnegut"&key=${API_Key}`
    );
    return res.json();
  };

  // Using the Hook
  const { data: books, error, isLoading } = useQuery("bookList", getBookList);

  // Error and Loading States
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  const bookInfo = books.items.map((bookList: { volumeInfo: any }) =>
    console.log(bookList.volumeInfo)
  );

  // Show response
  return (
    <>
      {books.items.map((bookList: { volumeInfo: any }) => (
        <li className="flex flex-col max-w-xs min-h-[340px]">
          <div className="max-w-xs p-12 bg-[#2F313E] rounded-md">
            <img
              src={bookList.volumeInfo.imageLinks.thumbnail}
              alt=""
              className="min-h-40 max-h-40 rounded-sm"
            />
            <h1 className="max-w-xs">{bookList.volumeInfo.title}</h1>
            <h2>{bookList.volumeInfo.authors}</h2>
          </div>
        </li>
      ))}
    </>
  );
};

export default BookList;
