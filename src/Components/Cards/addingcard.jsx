import { useState } from "react";
import "./addingcard.css";
import { AddBooks } from "../Details/fakebooks";
export default function Addingcard({sendData}){
    const [open,setOpen]=useState(false);
    const [success,setSuccess]=useState(false);
    const getRandom=Math.floor(Math.random()*10000);
    const [newBoook,setNewBook]=useState({
        id: getRandom,
        title: "",
        author: "",
        category: "",
        year: "",
        copies: 0,
        available: true
    });
    
    return(
        <div className="card-overlay">

            <div className="expanded-card">
                <button className="close-btn" onClick={() => sendData(true)}>
                    ✕
                </button>
                <h2>Add Book Here</h2>
                <form action="">
                    <label htmlFor="bookName">Book Name</label>
                    <input type="text" name="bookName" onChange={(event)=>{setNewBook({...newBoook, title: event.target.value})}} required />
                    <label htmlFor="Author">Author Name</label>
                    <input type="text" name="Author" onChange={(event)=>{setNewBook({...newBoook, author: event.target.value})}} required />
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" onChange={(event)=>{setNewBook({...newBoook, category: event.target.value})}} required />
                    <label htmlFor="copies">Copies</label>
                    <input type="text" name="copies" onChange={(event)=>{setNewBook({...newBoook, copies: event.target.value})}} required />
                    <label htmlFor="year">Year</label>
                    <input type="text" name="year" onChange={(event)=>{setNewBook({...newBoook, year: event.target.value})}} required />
                    <label htmlFor="availble">Availble</label>
                    <select name="availble" id="availble" onChange={(event)=>{setNewBook({...newBoook, available: event.target.value})}}>
                        <option value="true">Availble</option>
                        <option value="false">Not Availble</option>
                    </select>
                    <button type="submit" className="submitBook" onClick={(e)=>{ 
                        e.preventDefault();
                        AddBooks(newBoook);
                        setSuccess(true);
                        }}>Submit</button>
                    {
                        success ? <p className="successMsg">Book Added Successfully!</p> : <></>
                    }
                </form>
            </div>
        </div>
    )
}