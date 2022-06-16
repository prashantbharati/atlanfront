import React from "react";

function query({ cs, data1 }) {
  console.log("welcome query");
  const select = ({ data }) => {
    /*
        {table: 'Table1', columns: 'Rain', where: Array(2), values: '', orderby: 'Name'}
columns: "Rain"
orderby: "Name"
table: "Table1"
values: ""
where: (2) ["name='Mussorie'", "name='Shimla'"]
    */
    console.log("selectquery");
    let query =
      "SELECT " +
      data.columns +
      " FROM " +
      data.table +
      " WHERE " +
      data.where +
      " ORDER BY " +
      data.order;

    console.log(query);
  };

  return <>{cs === 1 && select(data1)};</>;
}

export default query;
