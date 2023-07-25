import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../assets/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  // const selectedCategory= 'New';
  return (
    <Stack
      direction="row"
      
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        position:'sticky',
        top:0,
      }}>
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          key={category.name}>
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}>
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}>
            {category.name}
          </span>{" "}
          {/**makes the button a bit greyed out, the non selected buttons. */}
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
