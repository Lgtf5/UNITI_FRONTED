
export default function ResourceButton({img, description,}) {
    return (
    <div className="resource-container">
        <button className='resource-button'>
            <img src={img}/>
            <p>{description}resource</p>
            </button> 
        </div>
    )
}

// export default function ResourcesContainer() {
//     return (
//         <>
//             <div className='resource-container'>
//                 <ResourceButton value="resource1" />
//                 <ResourceButton value="resource2" />
//                 <ResourceButton value="resource3" />
//             </div>
//         </>
//     )

// }

