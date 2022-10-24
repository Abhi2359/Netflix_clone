import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import { useRef } from "react"
import ListItem from "../listItem/ListItem"
import "./list.scss"

export default function List() {

  const listRef= useRef()
  const handleClick = (direction)=>{
    let distance=listRef.current.getBoundingClientRect().x-50

      if(direction ==="left"){
      listRef.current.style.transform =`translateX(${230+distance}px)`
      }
      if(direction ==="right"){
        listRef.current.style.transform =`translateX(${-230+distance}px)`
        }
  }



  return (
    <div className="list">
   <div className="listTitle">Continue to watch</div>
   <div className="wrapper">
    <ArrowBackIosOutlined  className="sliderArrow left" onClick={()=>handleClick("left")} />
    <div className="container"  ref={listRef}>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
    </div>
    <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")} />
   </div>
    </div>
  )
}