import React, { useState } from "react";
import jsonData from "../../data/User_Mock_Data.json";

import "./Search.scss";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
    
      <input
        type="text"
        placeholder="Search . . ."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-data">
        {jsonData
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.last_name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((data, key) => {
            return (
              <div className="container" key={key}>
                
                <div className="row">
                  <img className="profile-image" src={data.avatar} />
                </div>
                <div className="profile-details">
                <span> {data.first_name + " " + data.last_name}</span>
                <span> {data.email}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
