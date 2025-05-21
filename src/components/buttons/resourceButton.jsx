
 function ResourceButton({img, description,}) {
    return (
    <div className="resource-container">
        <button className='resource-button'>
            <img className="resource-img" src={img}/>
            <p className="resource-description" >{description}</p>
            </button> 
        </div>
    )
}

export default function ResourcesContainer() {
    return (
        <>
            <div className='resource-container'>
                <ResourceButton img="" description="resource1" />
                <ResourceButton img="" description="resource2" />
                <ResourceButton img="" description="resource3" />
            </div>
        </>
    )

}

