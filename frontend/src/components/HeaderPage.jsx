import React from "react";

import "./HeaderPage.css";

function HeaderPage({ page, totalPages, title }) {
  return (
    <div className="header-container">
      <div className="header">
        <div className="pages-numbers">
          <div className="page">{page}</div>
          <div className="total-pages">/{totalPages}</div>
        </div>
        <div className="line" />
      </div>
      <h1 className="title">{title}</h1>
    </div>
  );
}

export default HeaderPage;
