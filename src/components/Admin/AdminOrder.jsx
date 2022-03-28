import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import SideNav from './AdminSideNav';


class AdminOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            items : []
        }
       
   

    }
    
    render(){
        return(
            <div>
                
            <Container fluid>

                <Row>
                <Col xs ="2" id="sidebar-wrapper" className="bg-dark">
                              <div>
                              <h2 className="text-light">
                                  Admin 
                              </h2>
                                 <SideNav/>
                              </div>
                              
                          </Col>
                    <Col xs ="10">
                        <h2 className="text-center">Order List</h2>
                    <Table>
                    <thead>
                      <tr>
                          <th>Order-Id</th>
                          <th>User-Id</th>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          
                      </tr>
                    
                    </thead>
                    <tbody>
                        {
                            this.state.items.map(
                                item=>
                                <tr key ={item.productId}>
                                <td className="text-break text-break text-center text-wrap">{item.orderId}</td>
                                <td className="text-break text-break text-center text-wrap">{item.userId}</td>
                                <td className="text-break text-break text-center text-wrap">{item.productName}</td>
                                <td className="text-break text-break text-center text-wrap">{item.productPrice}</td>
                                <td className="text-break text-break text-center text-wrap">{item.productQuantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                    </Col>
                </Row>
                
            </Container>
            <Container>
                <Row>
                    <Col>
                    <Button type ="submit" variant="primary"> Pay </Button>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default AdminOrder;