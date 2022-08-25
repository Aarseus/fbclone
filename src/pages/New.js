import * as React from "react";
import PropTypes from "prop-types";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ThumbUpOffAltSharpIcon from "@mui/icons-material/ThumbUpOffAltSharp";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import {
  AccountCircleSharp,
  Add,
  AddToPhotos,
  CalendarTodayOutlined,
  ChatBubbleOutlineSharp,
  Circle,
  CollectionsOutlined,
  ExploreOutlined,
  FlagOutlined,
  GroupOutlined,
  Home,
  MenuSharp,
  MoreHorizSharp,
  OndemandVideoOutlined,
  PhotoCamera,
  SearchSharp,
  SentimentSatisfiedAltSharp,
  SportsEsportsOutlined,
  VideoCameraBackOutlined,
} from "@mui/icons-material";
import { useState } from "react";
const drawerWidth = 240;

function New(props) {
  //for menu
  const menu = [
    {
      name: "NewsFeed",
      icon: <Home />,
      selector: <MoreHorizSharp />,
      selected: true,
    },
    {
      name: "Messenger",
      icon: <ChatBubbleOutlineSharp />,
      selector: "",
      selected: false,
    },
    {
      name: "Watch",
      icon: <OndemandVideoOutlined />,
      selector: "",
      selected: false,
    },
    {
      name: "Pages",
      icon: <FlagOutlined />,
      selector: "",
      selected: false,
    },
    {
      name: "Games",
      icon: <SportsEsportsOutlined />,
      selector: "",
      selected: false,
    },
    {
      name: "Explore",
      icon: <ExploreOutlined />,
      selector: "",
      selected: false,
    },
    {
      name: "Events",
      icon: <CalendarTodayOutlined />,
      selector: "",
      selected: false,
    },
    {
      name: "Groups",
      icon: <GroupOutlined />,
      selector: "",
      selected: false,
    },
    {
      name: "Collections",
      icon: <CollectionsOutlined />,
      selector: "",
      selected: false,
    },
  ];

  //  for posting
  const defaultPost = {
    content: "",
  };
  const [post, setPost] = useState([]);
  const [postValue, setPostValue] = useState(defaultPost);
  const handlePost = () => {
    setPost([postValue, ...post]);
  };
  const handleChange = () => {
    setPostValue({
      ...postValue,
      content: document.getElementById("postnote").value,
    });
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}

      <Grid item xs={4} style={{ padding: "10px" }}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <FacebookRoundedIcon
              sx={{ fontSize: "50px", color: "rgb(25,118,241)" }}
            />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              fontFamily: "roboto",
              fontWeight: "bolder",
              fontSize: "30px",
              verticalAlign: "middle",
              lineHeight: "50px",
              color: "rgb(25,118,241)",
            }}
          >
            facebook
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <TextField
              label="Search"
              variant="outlined"
              sx={{ borderRadius: "30%" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchSharp />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        {menu.map((menuitem) => {
          return (
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid
                item
                xs={2}
                style={{
                  color: menuitem.selected ? "rgb(25,118,241)" : "none",
                }}
              >
                {menuitem.icon}
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  fontFamily: "roboto",
                  verticalAlign: "middle",
                  lineHeight: "25px",
                  color: menuitem.selected ? "rgb(25,118,241)" : "none",
                  fontWeight: menuitem.selected ? "bold" : "normal",
                }}
              >
                {menuitem.name}
              </Grid>
              <Grid item xs={2} sx={{ marginLeft: "50px" }}>
                {menuitem.selector}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer> */}

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        style={{ backgroundColor: "rgb(242,242,245)" }}
      >
        <Grid
          item
          xs={6}
          style={{ backgroundColor: "rgb(242,242,245)", padding: "30px" }}
        >
          <Card>
            <CardContent>
              <Grid container spacing={5}>
                <Grid
                  item
                  xs={9}
                  style={{
                    fontFamily: "roboto",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Whats on your mind? Dipendra
                </Grid>
                <Grid
                  item
                  xs={3}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "rgb(25,118,241)",
                    cursor: "pointer",
                  }}
                >
                  <SentimentSatisfiedAltSharp />
                  <AddToPhotos />
                  <Add />
                </Grid>
              </Grid>
              <Grid
                container
                style={{
                  fontFamily: "roboto",
                  marginTop: "10px",
                  justifyContent: "space-between",
                }}
              >
                <TextareaAutosize
                  id="postnote"
                  onChange={handleChange}
                  minRows={7}
                  placeholder="Sharing Options"
                  style={{ width: "100%" }}
                />
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "rgb(25,118,241)",
                    color: "white",
                    marginTop: "5px",
                  }}
                  onClick={handlePost}
                >
                  Post
                </Button>
              </Grid>
            </CardContent>
            <CardContent style={{ display: "flex" }}>
              <Button
                variant="outlined"
                style={{ marginRight: "10px" }}
                startIcon={<PhotoCamera />}
              >
                Camera
              </Button>
              <Button
                variant="outlined"
                startIcon={<VideoCameraBackOutlined />}
              >
                Live
              </Button>
            </CardContent>
          </Card>

          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            {post.map((value) => {
              return (
                <Card
                  sx={{
                    width: "100%",
                    marginBottom: "10px",
                    marginLeft: "15px",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h3"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        width: "100%",
                      }}
                    >
                      Dipendra Bista
                    </Typography>
                  </CardContent>
                  <CardContent>{value.content}</CardContent>
                  <CardContent style={{ justifyContent: "space-around" }}>
                    <Button
                      variant="outlined"
                      startIcon={<ThumbUpOffAltSharpIcon />}
                    >
                      Like
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<ChatBubbleOutlineSharp />}
                      style={{ marginLeft: "10px" }}
                    >
                      Comment
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<ReplySharpIcon />}
                      style={{ marginLeft: "10px" }}
                    >
                      Share
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </Box>
      
    </Box>
  );
}

New.propTypes = {
  window: PropTypes.func,
};

export default New;
