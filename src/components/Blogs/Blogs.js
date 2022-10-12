import React from 'react';

const Blogs = () => {
    return (
       <div className='mt-5'>
       <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  How will you improve the performance of a React Application?
  </div>
  <div class="collapse-content"> 
    <p>1. Use binding functions in constructors</p>
    <p>2. Avoid inline style attributes </p>
    <p>3. Avoid extra tags by using React fragments</p>
  </div>
</div>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  What are the different ways to manage a state in a React application?


  </div>
  <div class="collapse-content"> 
    <li>Hooks</li>
    <li>React Context Api</li>
  </div>
</div>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
  </div>
  <div class="collapse-content"> 
  <p>I will use Array.filter() method</p>
  </div>
</div>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  What is a unit test? Why should write unit tests?
  </div>
  <div class="collapse-content"> 
<p>Unit tests means that we write code that verifies that our code works as expected.</p>
<p>There are multiple reasons why unit tests can be helpful. Some of them being:
<li>Prevent regressions</li>
    <li>Excercise Your Code</li>
    <li>Faster Feedback While developing</li>
</p>
  </div>
</div>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  How does prototypical inheritance work?
  </div>
  <div class="collapse-content"> 
    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
  </div>
</div>
       
       </div>
    );
};

export default Blogs;