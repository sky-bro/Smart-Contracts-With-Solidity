// import React from "react";
// import { Menu } from "semantic-ui-react";
//
// export default () => {
//   return (
//     <Menu>
//       <Menu.Menu position="right" />
//     </Menu>
//   );
// };

import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu style={{ marginTop: "10px" }}>
        <Menu.Item
          name="CrowdCoin"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="Campaign"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            icon="add"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
