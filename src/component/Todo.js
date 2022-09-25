import React, { useState } from "react";
import "./css/style.css";

export default function Todo() {
  const [value, setvalue] = useState();
  const [item, s] = useState([]);


  const handlechange = (event) => {
    setvalue(event.target.value);
  };
  const additem = () => {
    if (!value) {
    } else {
      //   const inputValue={id:new Date().getTime().toString(),name:value}
      s([...item, value]);
      setvalue("");
    }
  };
const remove=(i)=>{
 const updated=item.filter((elm,index)=>{
  return index!==i;
 })
 s(updated)
}
  const removeall = () => {
    s([]);
  };
  // const edit=(id)=>{
  //   let toedit=item.find((elem)=>{
  //     return elem.id===id;
  //   })
  //   setvalue(toedit.name);
  //  settoggle(false);
  //  setisedit(id);

  // }
  return (
    <>
      <div className="main-div">
        <div className="div-wrapper">
          <input
            placeholder=" enter the todo"
            value={value}
            className="add"
            onChange={handlechange}
          ></input>
          <button className="but" onClick={additem}>
            +
          </button>
          
        </div>
        <div>
          {item.map((elm,i) => {
            return (
              <>
                <div className="item-add">
                  <div className="item-1" key={i}>
                    {elm}
                  </div>
                  <button className="but" onClick={() => remove(i)}>
                    -
                  </button>
                 
                </div>
              </>
            );
          })}
        </div>
        <button className="btn2" onClick={removeall}>
          remove all
        </button>
      </div>
    </>
  );
}
