export const fakebooks=[
  {
    "id": 1,
    "title": "Ocean of Knowledge",
    "author": "R. K. Sharma",
    "category": "Education",
    "year": 2018,
    "copies": 12,
    "available": true
  },
  {
    "id": 2,
    "title": "The Silent Library",
    "author": "Emily Watson",
    "category": "Fiction",
    "year": 2020,
    "copies": 5,
    "available": true
  },
  {
    "id": 3,
    "title": "Data Structures in Depth",
    "author": "Amit Verma",
    "category": "Technology",
    "year": 2019,
    "copies": 8,
    "available": false
  },
  {
    "id": 4,
    "title": "History of the World",
    "author": "Michael Brown",
    "category": "History",
    "year": 2015,
    "copies": 3,
    "available": true
  },
  {
    "id": 5,
    "title": "Mastering JavaScript",
    "author": "Sarah Johnson",
    "category": "Programming",
    "year": 2021,
    "copies": 10,
    "available": true
  },
  {
    "id": 6,
    "title": "Competitive Exam Guide",
    "author": "Naveen Kumar",
    "category": "Exam Prep",
    "year": 2022,
    "copies": 15,
    "available": true
  },
  {
    "id": 7,
    "title": "Waves of the Sea",
    "author": "Oliver Reed",
    "category": "Literature",
    "year": 2016,
    "copies": 4,
    "available": false
  },
  {
    "id": 8,
    "title": "Artificial Intelligence Basics",
    "author": "Priya Nair",
    "category": "Technology",
    "year": 2023,
    "copies": 7,
    "available": true
  },
  {
    "id": 9,
    "title": "The Art of Public Speaking",
    "author": "Daniel Carter",
    "category": "Self-Help",
    "year": 2017,
    "copies": 6,
    "available": true
  },
  {
    "id": 10,
    "title": "Introduction to Databases",
    "author": "Sandeep Rao",
    "category": "Programming",
    "year": 2020,
    "copies": 9,
    "available": false
  }
]

export const intializeBooks=()=>{
  localStorage.setItem("booksdata", JSON.stringify(fakebooks));
}
export const AddBooks=(newBook)=>{
  console.log(newBook);
  
  console.log(fakebooks);
  const updatedBooks=JSON.parse(localStorage.getItem("booksdata")) || [];
  updatedBooks.push(newBook);
  // localStorage.removeItem("booksdata");
  localStorage.setItem("booksdata", JSON.stringify(updatedBooks));
}