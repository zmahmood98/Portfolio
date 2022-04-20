import React from 'react';
import Carousel from 'react-elastic-carousel';
import './index.css';
import database from '../../images/database.png'


class TechnologiesList extends React.Component {

    state = {
        items: [
          {id: 1, title: 'MongoDB', image: database}
        ]
      }

      render () {
        const { items } = this.state;
        return (
            <Carousel>
                {items.map(item => 
                <div key={item.id} className="icon">
                    <img src={item.image}/>
                    {item.title}
                </div>)}
            </Carousel>
    )
}
}

export default TechnologiesList;
