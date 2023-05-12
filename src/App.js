import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState} from 'react';
import Badge from 'react-bootstrap/Badge';




function App() {
  const data = [
    {
      productImage:
        "https://www.apple.com/in/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png",
      productName: "Iphone 14promax",
      price: 100000,
      rating: 91,
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAmZcKm3NQoK8tlikVJsPAfm3cAhr_IKelWibDsJj3vgZ5BCZuvssOPGjIbljbkWR68&usqp=CAU",
      productName: "Samsung Galaxy",
      price: 95000,
      rating: 90,
    },
    {
      productImage:
        "https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/GPX7PR128H_A_google_pixel_7_pro_5g_unlocked_smartphone_128gb_hazel.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
      productName: "Google Pixel 7pro",
      price: 70000,
      rating: 80,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/617MPEZB5mL._SL1500_.jpg",
      productName: "Oneplus 11",
      price: 64000,
      rating: 50,
    },
    {
      productImage:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70",
      productName: "Apple 14",
      price: 68000,
      rating: 95,
    },
    {
      productImage:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/0/h/k/-original-imagcg22czc3ggvw.jpeg?q=70",
      productName: "Samsung F23",
      price: 14000,
      rating: 45,
    },
    {
      productImage:
      "https://rukminim1.flixcart.com/image/200/200/l1zc6fk0/mobile/u/7/w/f21-pro-cph2363-oppo-original-imagdf4jphscz9jz.jpeg?q=70",
      productName: "Oppo F21Pro",
      price: 21000,
      rating: 60,
    },
    {
      productImage:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/u/c/u/-original-imagnanh2yvpc4zx.jpeg?q=70",
      productName: "Infinix smart7",
      price: 8000,
      rating: 40,
    },
  ];

  const [count,setCount]=useState(0);

  return (
    <div className="App">

    <div className='cart'>
     <Badge bg="primary">cart {count}</Badge>
    </div>

    <div className='card-container'>
    {data.map((value,index)=>(
      <Product
        key={index}
        productImage={value.productImage}
        productName={value.productName}
        price={value.price}
        rating={value.rating}
        count={count}
        setCount={setCount}
      />
    ))}
      
    </div>
   
    </div>
  );
}


export default App;

 function Product({productImage,productName,price,rating,count,setCount}){
     const [show,setShow] = useState(true)
    

     function addtoCart(){
      setCount(count+1)
      setShow(!show)
     }
     
    
     function removeCart(){
      setCount(count-1)
      setShow(!show)
     }

  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productImage} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Card.Text>{rating}</Card.Text>
        {/* {conditional rendering} */}

        {/* { !show ?
          <Button variant="primary"
        onClick={""} 
        >Add to cart</Button> : ""}
        { show ?
          <Button variant="danger"
        onClick={""} 
        >Remove from cart</Button> : ""} */}
        
        { show ?
          <Button variant="primary"
        onClick={addtoCart} 
        >Add to cart</Button>
        :
        <Button variant="danger"
        onClick={removeCart} 
        >Remove from cart</Button>

        }
        
      </Card.Body>
    </Card>
  )
 }


