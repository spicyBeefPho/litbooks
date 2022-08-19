import { useQuery } from "react-query";
import React from "react";
import BookCollection from "./BookCollection";

const BookList = () => {
  // Fetcher Function
  const getBookList = async () => {
    const res = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=inauthor:"kurt+vonnegut"&key=AIzaSyAQ-68r4o5A3NH6u086qg_laaemRSrX_8A'
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
        <li className="flex flex-col max-w-xs">
          <div className="max-w-xs p-12 bg-gray-200">
            <img src={bookList.volumeInfo.imageLinks.thumbnail} alt="" />
            <h1 className="max-w-xs">{bookList.volumeInfo.title}</h1>
            <h2>{bookList.volumeInfo.authors}</h2>
          </div>
        </li>
      ))}
      <ul></ul>
    </>
  );
};

export default BookList;
