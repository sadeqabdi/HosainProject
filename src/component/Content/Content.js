import React from 'react';
import { Image } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'

function Content() {
  return (
    <div>
      <div>
      <Image src='https://www.thesun.co.uk/wp-content/uploads/2019/12/NINTCHDBPICT000474140953-e1577547392901.jpg' size='small' circular />
      <h2>
           Edward <br></br>
        Lobanovskiy
      </h2>
      <span>
        Front End Developer
      </span>
      </div>
      <div>
        <List>
        <List.Item>
            <List.Icon name='mail outline' />
            <List.Content>
              <a href='mailto:jack@semantic-ui.com'>abdi.71sadeq@gmail.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='markmap marker alternateer' />
            <List.Content>Sanandaj, IR</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='Full Time' />
            <List.Content>
              <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='Sales and Marketing' />
            <List.Content>Semantic UI</List.Content>
          </List.Item>
        </List>

      </div>
    </div>
  );
}

export default Content;
