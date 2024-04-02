function ItemProduct({ productName, productPrice, productImage }) {
    console.log(productImage)
    return (
        <>
            <div
                style={{
                    width: '23vw',
                    height: '40vh',
                    margin: '2em',
                    // overflow: 'hidden',
                    perspective: '1000px',
                    position: 'relative', // Thêm position: 'relative' vào đây
                }}
            >
                <div
                    style={{
                        background: `url(${productImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '23vw',
                        height: '40vh',
                        borderRadius: '20px',
                        // transition: 'transform 0.5s',
                        // transform: 'scale(1.2)',
                        transform: 'scale(1)',
                        transition: 'transform 0.5s',
                        position: 'relative',

                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';

                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        flexDirection: 'column',
                        transition: "transform 0.5s ease 0",
                        margin: '15px 20px',
                        position: 'absolute',
                    }}

                >
                    <h3 style={{ margin: '0.5em' }}>{productName}</h3>
                    <p style={{ margin: '0.5em' }}>{productPrice}</p>
                </div>
            </div>
        </>);
}

export default ItemProduct;