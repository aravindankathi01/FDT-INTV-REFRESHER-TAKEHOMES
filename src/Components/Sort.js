import React, { useState } from "react";

const Sort = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  function sortByDate() {
    const byDate = [...data].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    setData(byDate);
  }

  function sortByViews() {
    const byViews = [...data].sort((a, b) => {
      return b.views - a.views;
    });
    setData(byViews);
  }
  return (
    <div className='flex flex-col items-center justify-center gap-4 h-screen w-fit mx-auto'>
      <h1 className='text-xl font-bold'>Date and Views Table</h1>

      <div className='flex gap-2 text-base font-medium'>
        <button
          className='border-2 bg-slate-200 rounded-lg shadow-lg p-1'
          onClick={sortByDate}>
          Sort by Date
        </button>
        <button
          onClick={sortByViews}
          className='border-2 bg-slate-200 rounded-lg shadow-lg p-1'>
          Sort by Views
        </button>
      </div>
      <table class='table-auto shadow-lg'>
        <thead>
          <tr>
            <th className='border border-black p-1'>Date</th>
            <th className='border border-black p-1'>Views</th>
            <th className='border border-black p-1'>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, ind) => {
            return (
              <tr key={ind}>
                <td className='border border-slate-600 p-1'>{item.date}</td>
                <td className='border border-slate-600 p-1'>{item.views}</td>
                <td className='border border-slate-600 p-1'>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Sort;
