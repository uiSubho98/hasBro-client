import React, { useRef, useState } from "react";
import "./AllReview.css";
const EachReview = ({eachReview}) => {
    const {name,email,description,ratings}=eachReview;


    return (
        <div className="text-center ">
 
 <div class="card w-96 bg-base-100 shadow-xl ">
  <div class="card-body ">
    <h2 class="card-title ">{name}</h2>
    <p className="text-left">{email}</p>
    <p className="text-left">{ratings}</p>
    <p className="text-left">{description}</p>
  </div>
</div>
       
   
        </div>
    );
};

export default EachReview;