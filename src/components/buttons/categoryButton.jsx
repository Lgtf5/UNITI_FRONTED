export default  function CategoryButton({img, title, description}) {
        return (
    <div className="category-container">
        <button className='category-button'>
            <img src={img}/>
            <h2>{title}</h2>
            <p>{description}category</p>
        </button> 
    </div>
    )
}

// export default function CategoryContainer() {    
//     return (
//         <>
//             <div className='category-container'>
//                 <CategoryButton value="FRONTEND" />
//                 <CategoryButton value="BACKEND" />
//                 <CategoryButton value="TESTING" />
//             </div>
//         </>
//     )
// }