  function CategoryButton({img, title, description}) {
        return (
    <div className="category-container">
        <button className='category-button'>
            <img className="category-img" src={img}/>
            <h2 className="category-title">{title}</h2>
            <p className="category-description">{description}</p>
        </button> 
    </div>
    )
}

export default function CategoryContainer() {    
    return (
        <>
            <div className='category-container'>
                <CategoryButton img="public\backgroundFront.png" title="FRONTEND" description="kjdhgfksjghljhsdfkjgd uytgfdeiru iusyhr useryfsailurytfasorf kjh"/>
                <CategoryButton img="public\backgroundBack.png" title="BACKEND" description="kjdhgfksjghljhsdfkjgd uytgfdeiru iusyhr useryfsailurytfasorf kjh"/>
                <CategoryButton img="public\backgroundTestting.png" title="TESTING" description="kjdhgfksjghljhsdfkjgd uytgfdeiru iusyhr useryfsailurytfasorf kjh"/>
            </div>
        </>
    )
}