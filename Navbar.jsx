import {
  Flex,
  Heading,
  Box,
  Button,
  Spacer,
  ButtonGroup,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Link,
} from "@chakra-ui/react";
import React from "react";
// import theme from "./style";

const Navbar = () => {
  return (
    <div>
      <Box font="theme" boxShadow="xs" p="6" rounded="md" bg="teal" color="white" height="120px" paddingTop="-100px">
        <Flex
          justify="space-around"
          minWidth="max-content"
          alignItems="center"
          gap="4"
        >
          
          <div style={{"width":"120px","height":"80px","paddingTop":"20px","color":"white", "background":"teal"}}>
            <img src="data:image/png;base64,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" alt="" />
          </div>

          <Menu isLazy>
            <MenuButton>Live Scores</MenuButton>
          </Menu>

          <Menu isLazy>
            <MenuButton>Schedule</MenuButton>
          </Menu>

          <Menu isLazy>
            <MenuButton>Archives</MenuButton>
          </Menu>

          <Menu isLazy>
            <MenuButton>News</MenuButton>
            <MenuList>
              <MenuItem>All Stories</MenuItem>
              <MenuItem>Cricbuzz Plus</MenuItem>
              <MenuItem>Latest News</MenuItem>
              <MenuItem>Topics</MenuItem>
              <MenuItem>Spotlight</MenuItem>
              <MenuItem>Opinions</MenuItem>
              <MenuItem>Specials</MenuItem>
              <MenuItem>Stats & Analysis</MenuItem>
              <MenuItem>Interviews</MenuItem>
              <MenuItem>Live Blogs</MenuItem>
              <MenuItem>Harsha Bhogle</MenuItem>
            </MenuList>
          </Menu>

          <Menu isLazy>
            <MenuButton>Series</MenuButton>
            <MenuList>
              <MenuItem>India tour of West Indies, 2022</MenuItem>
              <MenuItem>Pakistan tour of Sri Lanka, 2022</MenuItem>
              <MenuItem>South Africa tour of England, 2022</MenuItem>
              <MenuItem>New Zealand tour of West Ireland, 2022</MenuItem>
            </MenuList>
          </Menu>

          <Menu isLazy>
            <MenuButton>Teams</MenuButton>
            <MenuList>
              <MenuItem>India</MenuItem>
              <MenuItem>Sri Lanka</MenuItem>
              <MenuItem>England</MenuItem>
              <MenuItem>West Ireland</MenuItem>
              <MenuItem>Pakistan</MenuItem>
              <MenuItem>South Africa</MenuItem>
              <MenuItem>New Zealand</MenuItem>
            </MenuList>
          </Menu>

          <Menu isLazy>
            <MenuButton>Videos</MenuButton>
            <MenuList>
              <MenuItem>All Videos</MenuItem>
              <MenuItem>Categories</MenuItem>
              <MenuItem>Playlists</MenuItem>
            </MenuList>
          </Menu>

          <Menu isLazy>
            <MenuButton>Rankings</MenuButton>
            <MenuList>
              <MenuItem>ICC Rankings-Men</MenuItem>
              <MenuItem>ICC Rankings-Women</MenuItem>
            </MenuList>
          </Menu>

          <Menu isLazy>
            <MenuButton>More</MenuButton>
            <MenuList>
              <MenuItem>India</MenuItem>
              <MenuItem>Sri Lanka</MenuItem>
              <MenuItem>Quise</MenuItem>
              <MenuItem>Photos</MenuItem>
              <MenuItem>Mobile Apps</MenuItem>
              <MenuItem>Careers</MenuItem>
              <MenuItem>Contact Us</MenuItem>
            </MenuList>
          </Menu>

          <Spacer />

          <ButtonGroup gap="2">
            <Link>Sign in</Link>
            <Button colorScheme="pink">Sign up</Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
