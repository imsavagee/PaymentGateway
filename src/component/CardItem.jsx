import React from 'react'

function CardItem() {
    const div={
        backgroundColor:"black"
    }
    const products = [
        {
            id: 1,
            name: "Motorola edge 40",
            price: "$100"
        },
        {
            id: 2,
            name: "Samsung s24 ultra",
            price: "$150"
        },
        {
            id: 1,
            name: "Iphone 16 pro max",
            price: "$190"
        },
        {
            id: 1,
            name: "Oneplus 13",
            price: "$80"
        },
        {
            id: 1,
            name: "Adidas Shoe ",
            price: "$110"
        },
        {
            id: 1,
            name: "Ceiling Fan",
            price: "$10"
        },
        {
            id: 1,
            name: "Motorola edge 50 Ultra",
            price: "$100"
        },
    ]
    return (
        <>
        <div className='div' style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>

        
            {
                products.map((item, index) => (
                    <div className="card" style={{width: "18rem",margin:"1rem"}}>
                        <img src="https://png.pngtree.com/png-clipart/20231007/original/pngtree-iphone-15-blue-png-image_13289457.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.price}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))
            }
</div>
        </>
    )
}

export default CardItem