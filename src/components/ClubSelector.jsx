import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const clubs = ["Pergola", "Alaya", "Tivoli", "Retro", "Bellavita", "Canava"];

function ClubSelector({ onSelectClubs, selectedClubs }) {
  const handleSelect = (club) => {
    if (selectedClubs.includes(club)) {
      onSelectClubs(selectedClubs.filter((c) => c !== club));
    } else {
      onSelectClubs([...selectedClubs, club]);
    }
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedClubs.length > 0 ? selectedClubs.join(", ") : "Clubs"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectClubs([])}>
          All Clubs
        </MenuItem>
        {clubs.map((club) => (
          <MenuItem 
            onClick={() => handleSelect(club)} 
            key={club}
            bg={selectedClubs.includes(club) ? "blue.200" : "white"}
          >
            {club}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default ClubSelector;
