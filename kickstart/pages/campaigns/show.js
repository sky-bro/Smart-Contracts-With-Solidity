import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    // console.log(props.query.address);
    // const campaigns = await factory.methods.getDeployedCampaigns().call();
    // return { campaigns };
    const summary = await Campaign(props.query.address)
      .methods.getSummary()
      .call();
    // console.log(summary);
    // minimumContribution,
    //       this.balance,
    //       requests.length,
    //       approversCount,
    //       manager
    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }
  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;
    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests and finalize requests",
        style: { overflowWrap: "break-word" }
      }
    ];
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <h3>CampaignShow</h3>
        {this.renderCards()}
      </Layout>
    );
  }
}

export default CampaignShow;
