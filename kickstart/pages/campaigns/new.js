import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Input, Button, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";
class CampaignNew extends Component {
  state = {
    minimumContribution: "0",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    console.log(1);
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    console.log(2);
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(3);
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({ from: accounts[0] });
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              value={this.state.minimumContribution}
              label="wei"
              labelPosition="right"
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}
export default CampaignNew;
