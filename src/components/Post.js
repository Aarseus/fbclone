import { Add, AddToPhotos, ChatBubbleOutlineSharp, PhotoCamera, SentimentSatisfiedAltSharp, VideoCameraBackOutlined } from '@mui/icons-material';
import { Button, Card, CardContent, Grid, TextareaAutosize, Typography } from '@mui/material';
import ThumbUpOffAltSharpIcon from "@mui/icons-material/ThumbUpOffAltSharp";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import React, { useState } from 'react'

const Post = () => {

 //  for posting
 const defaultPost = {
    id:1,
    content: "",
    like:false
  };
  const [post, setPost] = useState([]);
  const [postValue, setPostValue] = useState(defaultPost);
  const handlePost = () => {

setPostValue({...postValue,content:document.getElementById("postnote").value,
id:postValue.id+1})
setPost([{...postValue},...post]);
    // console.log(post.id)
  };
  const handleChange = () => {
    setPostValue({
      ...postValue,
      content: document.getElementById("postnote").value,
    });
  };

  const handleLike=(props)=>{
    // var value
//    var a=[...post,{...postValue,like:!props.like}]
//    console.log(a)
const b=post.filter(p=>p.id!==props.id)
// console.log(b)


const c=[...b,{...postValue,content:props.content,id:props.id,like:!props.like}]
// setPost([...b,{...postValue,content:props.content,id:props.id,like:!props.like}])
// console.log(c)

const d=c.sort((a,b)=>{
    return b.id-a.id
})
console.log(d)
setPost(d)
  }
  return (
   
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
                <Card sx={{ width: "100%", marginBottom: "10px",marginLeft:'15px' }}>
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
                    id='btnLike'
                      variant="outlined"
                      startIcon={<ThumbUpOffAltSharpIcon />}
                      onClick={()=>handleLike(value)}
style={{backgroundColor:value.like?'rgb(25,118,241)':'white',
color:value.like?'white':'rgb(25,118,241)'}}
                    >
                      Like
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<ChatBubbleOutlineSharp />}
                      style={{marginLeft:'10px'}}
                    >
                      Comment
                    </Button>
                    <Button variant="outlined" startIcon={<ReplySharpIcon />} style={{marginLeft:'10px'}}>
                      Share
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </Grid>
        </Grid>

    
  )
}

export default Post
