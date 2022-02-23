import { Col, Row } from "react-bootstrap"
import { Button } from "../../components/Button"
import like from "../../assets/img/heart.png"
import item1 from '../../assets/img/item1.jpg'
import item2 from '../../assets/img/item2.jpg'
import item3 from '../../assets/img/item3.jpg'
import item4 from '../../assets/img/item4.jpg'
import { useState } from "react"

const Item = ({currentProduct,onSetToCart}) => {
    const [visible, setVisible] = useState(false)
    return (
        <Row className="item__body">
            <Col md={7} className="item__imges">
                <Row>
                    <Col md={6}><img className='img' src={currentProduct.photos[0].photoUrl} alt="" /></Col>
                    <Col md={6}><img className='img' src={currentProduct.photos[1].photoUrl} alt="" /></Col>
                    <Col md={6}><img className='img' src={currentProduct.photos[2].photoUrl} alt="" /></Col>
                    <Col md={6}><img className='img' src={currentProduct.photos[3].photoUrl} alt="" /></Col>
                </Row>
            </Col>
            <Col  md={5} className="item__info">
                <div className="item__title">
                    <h4>{currentProduct.name} -</h4>
                    <h4> - {currentProduct.price} Тг</h4>
                </div>
                <div className="item__more-info">
                    <p>{currentProduct.description}</p>
                </div>
                <div className="item__colors">
                    <h4>Цвета:</h4>
                    <p>{currentProduct.colors}</p>
                </div>
                <div className="item__buttons">
                    <div onClick={onSetToCart}>
                        <Button title='Добавить в корзину'/>
                    </div>
                    <div className="img-like">
                        <img src={like} alt="" />
                    </div>
                </div>
                <div className="item__size">
                    <h4>Подробнее о размере товаре:</h4>
                    <ul>
                        <li>Ширина: {currentProduct.size[0]} см</li>
                        <li>Глубина: {currentProduct.size[2]} см</li>
                        <li>Высота: {currentProduct.size[1]} см</li>
                    </ul>
                </div>
                <div className="item__matelials">
                    <h4>Материалы и уход:</h4>
                    <p>{currentProduct.material}<span className={visible?'unshow':''} onClick={()=>{setVisible(true)}}>...</span></p>
                    { visible&&
                        <div className={visible?'':'full'}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero animi quas impedit natus doloremque! Itaque voluptatibus, repellendus sunt ipsam doloribus eos deserunt aliquid! Sequi ipsa ea inventore itaque odit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero animi quas impedit natus doloremque! Itaque voluptatibus, repellendus sunt ipsam doloribus eos deserunt aliquid! Sequi ipsa ea inventore itaque odit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero animi quas impedit natus doloremque! Itaque voluptatibus, repellendus sunt ipsam doloribus eos deserunt aliquid! Sequi ipsa ea inventore itaque odit.</p>
                        </div>
                    }
                </div>
            </Col>
        </Row>
    )
}

export default Item;