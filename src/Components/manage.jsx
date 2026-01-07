import Navbar from "./navbar";
import ManageCard from "./Cards/managecard";
// import { fakebooks } from "./Details/fakebooks";
import {intializeBooks} from "./Details/fakebooks";
import { useEffect, useState } from "react";
import "./manage.css";
import Addingcard from "./Cards/addingcard";

export default function Manage(){
    // console.log(users);
    useEffect(()=>{
        intializeBooks();
    },[]);
    const fakebooks=JSON.parse(localStorage.getItem("booksdata")) || [];
    const [search,setSearch]=useState("");
    const [books,setBooks]=useState(fakebooks);
    const [mngCard,setMngCrd]=useState(false);
    const getDataFromChild=(childData)=>{
        setMngCrd(!childData);
        const updatedBooks = JSON.parse(localStorage.getItem("booksdata")) || [];
        setBooks(updatedBooks);
    }
    useEffect(()=>{
        setBooks(fakebooks);
    }, []);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            const booksfiltering = books.filter((book)=>{
                return(
                    book.title.toLowerCase().includes(search.toLowerCase()) ||
                    book.author.toLowerCase().includes(search.toLowerCase()) ||
                    book.category.toLowerCase().includes(search.toLowerCase())
                );
            })
            setBooks(booksfiltering);
        },1000);
        return () => clearTimeout(timer);
    }, [search]);
    
    return (
        <>
            <Navbar />
            <div className="manage-topbar">
                    <input
                    type="text"
                    placeholder="Search by title, author, category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                    />
                    <button className="manage-btn" onClick={()=>setMngCrd(!mngCard)}>+ Manage</button>
                    
            </div>
            {
                
                mngCard===true ? <Addingcard sendData={getDataFromChild} /> : <></>
            }
            {
                <div className="manage-grid">
                    {
                        books.map(x => (
                            <ManageCard key={x.id} bookdetails={x} />
                        ))
                    }
                </div>
            }
        </>
    )
}