import * as React from 'react';
import Product1 from './Product1';
import Product2 from './Product2';
import { Link } from 'react-router-dom';
export default function Main() {
  return (
    <div>
      
      <div className="main">
        
        <div>
          <div className="project">Project</div>
        
          <table>
         
            <tr>
              <th className="th">Name </th>
              <th className="th"> about</th>
              <th className="th"> Status</th>
            </tr>
            <tr className="product-1">
               
               <td>
                {' '}
                <img
                  className="table-image"
                  src="https://static.toiimg.com/photo/65163239.cms"
                />{' '}
               
                Garam Masala
              </td>
              <td>
                The composition of garam masala differs regionally, with many
                recipes across the Indian subcontinent according to regional
              </td>
              <td> <Link to="Home">Active</Link></td>
              
              
              </tr>
             <tr>
               <td>
                <img
                   className="table-image"
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WIzX-Qh5D0ZB8f6dLMKQ9q5R2ChvHaCsPg&usqp=CAU"
                 />
                 Hotels
               </td>
               <td>
                 Safety Resource Center Available, Make Changes Online To Your
                 Booking, Customer Service Available.
               </td>
              <td> <Link to="Product1">Active</Link></td> 
            </tr>
            <tr>
              <td>
                {' '}
                <img
                  className="table-image"
                  src="https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=2000"
                />
                Technology
              </td>
              <td>
                the scientific knowledge and/or equipment that is needed for a
                particular industry
              </td>
              <td> <Link to="product2">Upcoming</Link></td>
            </tr>
            <tr>
              <td>
                {' '}
                <img
                  className="table-image"
                  src="https://www.mbarendezvous.com/images/top-stories-img/bannerimage_1558078662.jpg"
                />{' '}
                Fmcg
              </td>
              <td>
                Fast-moving consumer goods, also known as consumer packaged
                goods
              </td>
              <td>Upcoming</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
