import React, {useState} from 'react';
import './Header.css'
import {Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'
function Header() {
  const [activeItem,setActiveItem]= useState('home');
  const activeItemState = (e, { name }) => setActiveItem({ activeItem: name });
 
  return (
    <div className="all">
      <article className='container'>
        <div>
          <span>
           <strong>
           company logo
           </strong> 
          </span>
        </div>
        <div>
          <Menu secondary>
            <Menu.Item
              name='jobs'
              active={activeItem === 'jobs'}
              onClick={activeItemState}
            />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={activeItemState}
            />
            <Menu.Item
                name='post a job'
                active={activeItem === 'post a job'}
                onClick={activeItemState}
            />
            <Menu.Item
              name='resume search'
              active={activeItem === 'resume search'}
              onClick={activeItemState}
            />
            <Menu.Item
              name='pricing'
              active={activeItem === 'pricing'}
              onClick={activeItemState}
            />
          </Menu>
          

        </div>
        <div>
          <strong>
             sign in | sign up
          </strong> 
        </div>

      </article>
      <div className='bredcramp'>
          <span>
            <strong>
             <Icon name='chevron left' size='small' />Back to Application
              
            </strong>
          </span>
        </div>
    </div>  

  );
}

export default Header;
