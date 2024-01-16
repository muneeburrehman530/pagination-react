import React, { useState } from "react";
import { usersData } from "../api/users";
import TableData from "../components/TableData";
import Paginate from "../components/Paginate";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const users = usersData();
  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <TableData users={currentUsers} />
      <Paginate
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
