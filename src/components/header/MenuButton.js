import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          bgcolor: "#1a2332",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, color: "white", bgcolor: "#1a2332" }}
          >
            <Avatar
              sx={{ width: 32, height: 32, color: "white", bgcolor: "#1a2332" }}
            >
              <MenuIcon />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            color: "white",
            bgcolor: "#313d53",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 38,
              height: 38,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 17,
              width: 12,
              height: 12,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
              color: "white",
              bgcolor: "#313d53",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{ color: "white", bgcolor: "#313d53" }}>Home</MenuItem>
        <MenuItem sx={{ color: "white", bgcolor: "#313d53" }}>
          Services
        </MenuItem>
        <MenuItem sx={{ color: "white", bgcolor: "#313d53" }}>
          Projects
        </MenuItem>
        <MenuItem sx={{ color: "white", bgcolor: "#313d53" }}>
          Health and Safety
        </MenuItem>
        <Divider sx={{ bgcolor: "white" }} />
        <MenuItem sx={{ color: "white", bgcolor: "#313d53" }}>
          <ListItemIcon sx={{ color: "white", bgcolor: "#313d53" }}>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Contact
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
