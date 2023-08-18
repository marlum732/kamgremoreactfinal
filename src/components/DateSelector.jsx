import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const dates = ["2023-08-16", "2023-08-23", "2023-08-25"];

function DateSelector({ onSelectDate, selectedDate }) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedDate || "Dates"}
      </MenuButton>
      <MenuList>
        {dates.map((date) => (
          <MenuItem onClick={() => onSelectDate(date)} key={date}>
            {date}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default DateSelector;
