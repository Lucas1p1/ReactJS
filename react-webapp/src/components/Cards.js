import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>We’ve got you covered!</h1>
      <h4>     Our mission is to promote qualitative 
        and affordable healthcare services using the best technology,
         processes, and people.

We deliver value through quality health services
 managed by highly motivated and well-rewarded healthcare professionals.</h4>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              text='Top of the line customer care services and amazing agents'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jfif'
              text='Tried and tested by various organizations'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text='24/7 Service'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jfif'
              text='Healthcare providers in all states'
              label='Adventure'
              path='/products'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;