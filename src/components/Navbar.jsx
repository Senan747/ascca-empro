import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography"; 
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showProfile, setShowProfile] = React.useState(null);
  const open = Boolean(anchorEl);
  const openProfile = Boolean(showProfile);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickProfile = (event) => {
    setShowProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setShowProfile(null);
  };

  return (
    <div className="w-full p-3 px-5 flex justify-between items-center">
      <div className="w-[170px] max-md:w-[40px]">
        <img src="logo-2.png" alt="" className="w-full max-md:hidden" />
        <img src="logo-noword.jpg" alt="" className="w-full hidden max-md:flex"/>
      </div>
      <div>
        <Button id="basic-button" color="inherit">
          Əsas səhifə
        </Button>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          color="inherit"
        >
          Tədris
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Tədris planı</MenuItem>
          <MenuItem onClick={handleClose}>Cədvəl</MenuItem>
          <MenuItem onClick={handleClose}>Hesabatlar</MenuItem>
          <MenuItem onClick={handleClose}>Müraciətlər</MenuItem>
          <MenuItem onClick={handleClose}>Təkliflər</MenuItem>
          <MenuItem onClick={handleClose}>İmtahan</MenuItem>
          <MenuItem onClick={handleClose}>Kitabxana</MenuItem>
        </Menu>
      </div>

      <div>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <p className="flex max-md:hidden">Senan</p>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClickProfile}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={openProfile ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openProfile ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32, backgroundColor: '#2279CD' }}>S</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={showProfile}
          id="account-menu"
          open={openProfile}
          onClose={handleCloseProfile}
          onClick={handleCloseProfile}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{ display: { md: "flex", lg: "none" } }}
          >
            Senan
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
