import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
// import Roboto from '@fontsource/roboto/300.css';
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  AccountCircleSharp,
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
  SearchSharp,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import Post from "../components/Post";

function Homepage() {


  //for menu
  const menu = [
    {
        name:'NewsFeed',
        icon:<Home/>,
        selector:<MoreHorizSharp/>,
        selected:true
    
    },
    {
      name: "Messenger",
      icon: <ChatBubbleOutlineSharp />,
      selector: "",
      selected:false
    },
    {
      name: "Watch",
      icon: <OndemandVideoOutlined />,
      selector: "",
      selected:false
    },
    {
      name: "Pages",
      icon: <FlagOutlined />,
      selector: "",
      selected:false
    },
    {
      name: "Games",
      icon: <SportsEsportsOutlined />,
      selector: "",
      selected:false
    },
    {
      name: "Explore",
      icon: <ExploreOutlined />,
      selector: "",
      selected:false
    },
    {
      name: "Events",
      icon: <CalendarTodayOutlined />,
      selector: "",
      selected:false
    },
    {
      name: "Groups",
      icon: <GroupOutlined />,
      selector: "",
      selected:false
    },
    {
      name: "Collections",
      icon: <CollectionsOutlined />,
      selector: "",
      selected:false
    },
  ];

 

  //for users
  const users=[
    {
        name:'Naruto Uzumaki',
        image:<AccountCircleSharp />,
        status:<Circle  style={{ color: "rgb(39,253,5)", fontSize: "small" }} />
    },
    {
        name:'Natsu Dragneel',
        image:<AccountCircleSharp />,
        status:<Circle  style={{ color: "rgb(39,253,5)", fontSize: "small" }} />
    },
    {
        name:'Monkey D. Luffy',
        image:<AccountCircleSharp />,
        status:<Circle  style={{ color: "rgb(39,253,5)", fontSize: "small" }} />
    },
    {
        name:'Ichigo Kurosaki',
        image:<AccountCircleSharp />,
        status:<Circle  style={{ color: "rgb(39,253,5)", fontSize: "small" }} />
    },
    {
        name:'Roronoa Zoro',
        image:<AccountCircleSharp />,
        status:<Circle  style={{ color: "rgb(39,253,5)", fontSize: "small" }} />
    },
    {
        name:'Akagami Shanka',
        image:<AccountCircleSharp />,
        status:<Circle  style={{ color: "rgb(39,253,5)", fontSize: "small" }} />
    },
    {
        name:'Vinsmoke Sanji',
        image:<AccountCircleSharp />,
        status:<Circle  style={{ color: "rgb(39,253,5)", fontSize: "small" }} />
    },
    {
        name:'Portgas D. Ace',
        image:<AccountCircleSharp />,
        status:<Circle  style={{ color: "rgb(39,253,5)", fontSize: "small" }} />
    },
    {
        name:'Grey Fullbuster',
        image:<AccountCircleSharp />,
        status:<Circle  style={{ color: "rgb(39,253,5)", fontSize: "small" }} />
    },
    {
        name:'Itachi Uchiha',
        image:<AccountCircleSharp />,
        status:<Circle  style={{ color: "rgb(39,253,5)", fontSize: "small" }} />
    },
   
  ]

  return (
    <div className="App" style={{ fontFamily: "ro" }}>
      <Grid container spacing={1}>
        <Grid item xs={2.8} style={{ padding: "30px" }}>
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
                <Grid item xs={2} style={{color:menuitem.selected?'rgb(25,118,241)':'none'}}>
                  {menuitem.icon}
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    fontFamily: "roboto",
                    verticalAlign: "middle",
                    lineHeight: "25px",
                    color:menuitem.selected?'rgb(25,118,241)':'none',
                    fontWeight:menuitem.selected?'bold':'normal'
                  }}
                >
                  {menuitem.name}
                </Grid>
                <Grid item xs={4} sx={{ marginLeft: "50px" }}>
                  {menuitem.selector}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
{/* post starts  */}
<Post/>

     
        <Grid item xs={2.8} style={{ padding: "30px" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={7}
              style={{
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Dipendra Bista
            </Grid>
            <Grid item xs={2.5}>
                {/* <img src="https://www.kindpng.com/picc/m/188-1884555_naruto-shippuden-png-transparent-image-full-body-naruto.png"style={{maxHeight:'50%',maxWidth:'100%',borderRadius:'50%'}} alt="" /> */}
              <AccountCircleSharp />
            </Grid>
            <Grid item xs={2.5}>
              <MenuSharp />
            </Grid>
          </Grid>
          <hr />
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Friends
            </Typography>
          </Grid>

          <Grid container spacing={2} style={{ marginTop: "10px" }}>

            
{users.map((userlist)=>{
    return (<Grid container spacing={2} style={{ marginTop: "10px" }}>
  <Grid item xs={3}>
                
            {userlist.image}
              </Grid>
              <Grid item xs={6.5}>
                {userlist.name}
              </Grid>
              <Grid item xs={2.5}>
               {userlist.status}
              </Grid>
            </Grid>
    )
})}
            
            <Grid
              container
              spacing={2}
              style={{ marginTop: "10px", marginLeft: "10px" }}
            >
              <Button variant="outlined" fullWidth>
                New Group +
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;
