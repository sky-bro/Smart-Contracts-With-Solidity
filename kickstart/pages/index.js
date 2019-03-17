import { Card } from "semantic-ui-react";
import React, { Component } from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(item => {
      return {
        header: item,
        description: <a>view campaign</a>,
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    const items = this.props.campaigns.map(item => {
      return {
        header: item,
        description: <a>view campaign</a>,
        fluid: true
      };
    });
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        {this.renderCampaigns()}
      </div>
    );
  }
}

export default CampaignIndex;
