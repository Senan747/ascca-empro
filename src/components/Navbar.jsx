import React, { useState } from "react";
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
import Badge from "@mui/material/Badge";
import Icon from "@mdi/react";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import AlertDialog from "./AlertDialog";
import { Dialog } from "@mui/material";
import NotificationModal from "./NotificationModal";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showProfile, setShowProfile] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openNotification, setOpenNotification] = useState(null);
  const [moreNotification, setMoreNotification] = useState(false);
  const open = Boolean(anchorEl);
  const openProfile = Boolean(showProfile);
  const openNoti = Boolean(openNotification);

  const navigate = useNavigate();
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

  const handleCloseDialog = () => setOpenDialog(false);

  const handleNotificationMenuOpen = (event) => {
    setOpenNotification(event.currentTarget);
  };

  const handleNotificationMenuClose = () => {
    setOpenNotification(null);
  };

  const handleCloseMore = () => {
    setMoreNotification(!moreNotification);
  };

  return (
    <div className="w-full p-3 px-5 flex justify-between items-center font-Inter border-b-1">
      <div className="w-[170px] max-md:w-[40px]">
        <img src="logo-2.png" alt="" className="w-full max-md:hidden" />
        <img
          src="logo-noword.jpg"
          alt=""
          className="w-full hidden max-md:flex"
        />
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
          <MenuItem
            onClick={() => {
              handleClose, setOpenDialog(true);
            }}
          >
            Hesabatlar
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose, setOpenDialog(true);
            }}
          >
            Müraciətlər
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose, setOpenDialog(true);
            }}
          >
            Təkliflər
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose, setOpenDialog(true);
            }}
          >
            İmtahan
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose, setOpenDialog(true);
            }}
          >
            Kitabxana
          </MenuItem>
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
              <Avatar
                sx={{ width: 32, height: 32, backgroundColor: "#2279CD" }}
              >
                <IoMdSettings />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Badge
            badgeContent={4}
            color="primary"
            onClick={handleNotificationMenuOpen}
            sx={{ cursor: "pointer" }}
          >
            <FaBell className="ml-2 text-2xl relative" />
          </Badge>
          <Menu
            anchorEl={openNotification}
            id="notification-menu"
            open={openNoti}
            onClose={handleNotificationMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                fontSize: "10px",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              onClick={handleNotificationMenuClose}
              sx={{
                fontSize: "10px",

                marginLeft: "10px",
                paddingLeft: "2px",
                marginRight: "10px",

                marginBottom: "3px",
                wordWrap: 'break-word',
                whiteSpace: 'normal', 
              }}
            >
              Bildirişlər
            </MenuItem>
            <MenuItem
              onClick={handleNotificationMenuClose}
              sx={{
                fontSize: "10px",
                border: "1px solid #ffd369",
                marginLeft: "10px",
                paddingLeft: "2px",
                marginRight: "10px",
                borderRadius: "5px",
                marginBottom: "3px",
                wordWrap: 'break-word',
                whiteSpace: 'normal', 
              }}
            >
              2023-12-08 tarixində Ehtimal nəzəriyyəsi və riyazi statistika
              fənninə "9" yazıldı Ehtimal nəzəriyyəsi və riyazi statistika
            </MenuItem>
            <MenuItem
              onClick={handleNotificationMenuClose}
              sx={{
                fontSize: "10px",
                border: "1px solid #ffd369",
                marginLeft: "10px",
                paddingLeft: "2px",
                marginRight: "10px",
                borderRadius: "5px",
                marginBottom: "3px",
                wordWrap: 'break-word',
                whiteSpace: 'normal', 
              }}
            >
              İnsan-kompüter interfeysi fənninə 15/11/2023 - 22/11/2023 tarixinə
              Midterm əlavə edildi
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "10px",
                border: "1px solid #ffd369",
                marginLeft: "10px",
                paddingLeft: "2px",
                marginRight: "10px",
                borderRadius: "5px",
                marginBottom: "3px",
                wordWrap: 'break-word',
                whiteSpace: 'normal', 
              }}
            >
              Obyektyönlü proqramlaşdırma fənninə 16/11/2023 - 23/11/2023
              tarixinə Midterm əlavə edildi
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "10px",
                border: "1px solid #ffd369",
                marginLeft: "10px",
                paddingLeft: "2px",
                marginRight: "10px",
                borderRadius: "5px",
                marginBottom: "3px",
                wordWrap: 'break-word',
                whiteSpace: 'normal', 
              }}
            >
              {" "}
              Veb-proqramlaşdırma fənninə 14/11/2023 - 21/11/2023 tarixinə
              Midterm əlavə edildi Verilənlər bazası sistemləri fənninə
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "10px",
                border: "1px solid #3FA5DE",
                marginLeft: "10px",
                paddingLeft: "2px",
                marginRight: "10px",
                borderRadius: "5px",
                marginBottom: "3px",
                wordWrap: 'break-word',
                whiteSpace: 'normal', 
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#3FA5DE",
              }}
              onClick={() => {
                handleNotificationMenuClose();
                setMoreNotification(!moreNotification);
              }}
            >
              {" "}
              <button className="text-center">Ətraflı məlumat</button>
            </MenuItem>
          </Menu>
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
          <p className="pl-3" onClick={handleClose}>
            Senan
          </p>
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
          <MenuItem onClick={() => {handleClose(); navigate('/') }}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
      <AlertDialog open={openDialog} onClose={handleCloseDialog} />
      <NotificationModal open={moreNotification} onClose={handleCloseMore} />
    </div>
  );
}

export default Navbar;
