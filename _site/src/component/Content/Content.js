import React from 'react';
import './Content.css'
import { List, Button, Image, Icon  } from 'semantic-ui-react'

function Content() {
  return (
    <div className='content_page'> 
      <div className='block_img'>
        <div>
        <Image src='https://www.thesun.co.uk/wp-content/uploads/2019/12/NINTCHDBPICT000474140953-e1577547392901.jpg' size='small' circular />
        <h2>
            <span className='title_img'>Edward </span>
            <br></br>
          Lobanovskiy
        </h2>

        </div>
        <div className='content_text'>
        <span>
          Front End Developer
        </span>
        </div>
        <div>
        <List>

            <List.Item>
              <List.Icon name='mail outline' />
              <List.Content>
                <strong>abdi.71sadeq@gmail.com</strong>
              </List.Content>
            </List.Item>
            <hr className='hr'></hr>

            <List.Item>
              <List.Icon name='markmap marker alternateer' />
              <List.Content><strong>Sanandaj, IR</strong></List.Content>
            </List.Item>
            <hr className='hr'></hr>

            <List.Item>
              <List.Icon name='calendar times outline' />
              <List.Content>
                <strong>Full Time</strong>
              </List.Content>
            </List.Item>
            <hr className='hr'></hr>
          
            <List.Item>
              <List.Icon name='user outline' />
              <List.Content><strong>Sales and Marketing</strong></List.Content>
            </List.Item>

          </List>
        </div>
        <div>
          <Button primary>Download Resume</Button>
        </div>
      </div>
      <div style={{marginLeft:'350px', marginTop:'35px'}}>
        <div style={{marginBottom:'65px'}}>
          <h1>
            Professinal Summary
          </h1>
          <p>
            Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia<br></br>
            consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam<br></br>
            est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci[ng] velit, sed quia non<br></br>
            numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat<br></br>
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit<br></br>
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit,<br></br>
            qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum<br></br>
            fugiat, quo voluptas nulla pariatur?
          </p>
        </div>
        <div className='title2'>
          <h1>
            Work Experience
          </h1>
          </div>
        <div  className='block_WE'>
          <div style={{marginBottom:'30px'}}>
            <div className='font_caption'>
              <span>
                 Senior Front End Developer
              </span>  
            </div>
            
            <div className='font_WE'>
              <div>
                <span>
                <Icon name='file alternate outline' size='small' />Apple Inc.
                </span>
                <span  style={{marginLeft:'55px'}}>
                <Icon name='map marker alternate' size='small' />Lose Angeles
                </span>

              </div>

            </div>
          </div>
        <div>
          <div className='block_work'>
            <span>
              <strong>Full Time</strong>
            </span>
          </div>
          <div className='font_WE'>
             <Icon name='calendar times outline' size='small' />Aprile 12.2020.
          </div>
        </div>  
        </div>
        <hr className='hr'></hr>
        <div  className='block_WE'>
          <div style={{marginBottom:'30px'}}>
            <div  className='font_caption'>
              <span>
                 Junior Front End Developer
              </span>  
            </div>
            <div className='font_WE'>
              <div>
                <span>
                <Icon name='file alternate outline' size='small' />Apple Inc.
                </span>
                <span style={{marginLeft:'55px'}}>
                <Icon name='map marker alternate' size='small' />Lose Angeles
                </span>

              </div>

            </div>
          </div>
        <div>
          <div className='block_work'>
            <span>
              <strong>Full Time</strong>
            </span>
          </div>
          <div className='font_WE'>
             <Icon name='calendar times outline' size='small' />Aprile 12.2020.
          </div>
        </div>  
        </div>
        
        <hr className='hr' ></hr>
        <div  className='block_WE'>
          <div style={{marginBottom:'50px'}}>
            <div  className='font_caption'>
              <span>
                 Intern Developer
              </span>  
            </div>
            <div className='font_WE'>
              <div>
                <span>
                <Icon name='file alternate outline' size='small' />Apple Inc.
                </span>
                <span style={{marginLeft:'55px'}}>
                <Icon name='map marker alternate' size='small' />Lose Angeles
                </span>

              </div>

            </div>
          </div>
        <div>
          <div className='block_work'>
            <span>
              <strong>Full Time</strong>
            </span>
          </div>
          <div className='font_WE'>
             <Icon name='calendar times outline' size='small' />Aprile 12.2020.
          </div>
        </div>  
        </div>

        <div style={{marginBottom:'40px', marginTop:'50px'}}>
          <h1>
            Education
          </h1>
          </div>
        <div  className='block_WE'>
          <div style={{marginBottom:'40px'}}>
            <div  className='font_caption'>
              <span>
                 Masters in Software Engineering
              </span>  
            </div>
            <div>
              <div className='font_WE'>
                <Icon name='file alternate outline' size='small' />Massechusets Institute of Technology
              </div>

            </div>
          </div>
        <div>

          <div style={{marginTop:'30px', color:'#9c9c9c'}}>
             <Icon name='calendar times outline' size='small' />JUn 12.2014-Dec12.2014.2016
          </div>
        </div>  
        </div>
        <div  className='block_WE'  >
          <div style={{marginBottom:'40px'}}>
            <div  className='font_caption'>
              <span>
                 Bachelor in Software Engineering
              </span>  
            </div>
            <div>
              <div className='font_WE'>
                <Icon name='file alternate outline' size='small' />Massechusets Institute of Technology
              </div>

            </div>
          </div>
        <div>

          <div style={{marginTop:'30px',color:'#9c9c9c'}}>
             <Icon name='calendar times outline' size='small' />JUn 12.2014-Dec12.2014.2016
          </div>
        </div>  
        </div>
        
     </div>
        
    </div>
  );
}

export default Content;
