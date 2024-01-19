import React from "react";

import "./HeaderPage.css";

function HeaderPage({
  page = null,
  totalPages = null,
  title,
  lineHidden = null,
}) {
  return (
    <div className="header-container">
      <div className="header">
        <div className="pages-numbers">
          <div className={page != null ? "page" : "page-hidden"}>{page}</div>
          <div
            className={
              totalPages != null ? "total-pages" : "total-pages-hidden"
            }
          >
            /{totalPages}
          </div>
        </div>
        <div className={lineHidden ? "line-hidden" : "line"} />
      </div>
      <h1 className="title">{title}</h1>
    </div>
  );
}

export default HeaderPage;
