import { Row, Col } from 'react-bootstrap';
const BestSellingItems = [
    {
        img:"img/Bitmap.png",
        name:"Subaru",
        price:"from $40k"
    },
    {
        img:"img/Bitmap(1).png",
        name:"Subaru",
        price:"from $40k"
    },
    {
        img:"img/Bitmap(2).png",
        name:"Subaru",
        price:"from $40k"
    },
    {
        img:"img/logo.png",
        name:"Subaru",
        price:"from $40k"
    },
    {
        img:"img/logo(1).png",
        name:"Subaru",
        price:"from $40k"
    },
    {
        img:"img/logo(2).png",
        name:"Subaru",
        price:"from $40k"
    },

]
 export const BestSelling = ()=> {
    return (
        <>
        <div className="container" style={{paddingTop:"86px"}}>
            <h1 className="text-center fw-bold mb-5 ">Explore best selling car makes</h1>
            <Row className="d-flex justify-content-center " style={{paddingTop:"50px"}}>
                 {BestSellingItems.map(
                    ({img, name, price})=>  (
                        <Col md={4} className="custom-class">
                            <div  className="vw-add">
                                <img src={img} alt="" className="vw-logo w-[100]" />
                                <div>
                                    <div className="vw-text ">{name}</div>
                                    <div className="vw-price ">{price}</div>
                                </div>


                            </div>
                        
                        </Col>
                    )
                 )

                 }
            </Row>

        </div>
        </>
    )
}