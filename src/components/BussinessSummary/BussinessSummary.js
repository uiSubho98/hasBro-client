import React from 'react';
import customer from '../../Assets/llustration/customer.png'
import {GrMoney} from 'react-icons/gr'
import './BussinessSummary.css'
import {MdReviews} from 'react-icons/md'
import {FaTools} from 'react-icons/fa'

const BussinessSummary = () => {
    return (
        <div>
            <div className="text-center mt-5">
            <h2 className='text-primary text-3xl font-bold'>Bussiness Summary</h2>

            <div class="stats grid lg:grid-cols-3 sm:grid-cols-1 shadow">
  
  <div class="stat">
    <div class="stat-figure text-primary">
      <img src={customer} className='w-20' alt="" />
    </div>
    <div class="stat-title">Customer's Served</div>
    <div class="stat-value text-primary">100+</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure  text-secondary">
     <GrMoney className='money'></GrMoney>
    </div>
    <div class="stat-title">Annual Revenue</div>
    <div class="stat-value text-secondary">120M+</div>
    <div class="stat-desc">20% more than last month</div>
  </div>


  <div class="stat">
    <div class="stat-figure  text-primary">
     <MdReviews className='money'></MdReviews>
    </div>
    <div class="stat-title">Reviews</div>
    <div class="stat-value text-primary">33K+</div>
  </div>



  <div class="stat">
    <div class="stat-figure  text-secondary">
     <FaTools className='money'></FaTools>
    </div>
    <div class="stat-title">Tools</div>
    <div class="stat-value text-secondary">50+</div>
  </div>
  

  
</div>
            </div>
        </div>
    );
};

export default BussinessSummary;