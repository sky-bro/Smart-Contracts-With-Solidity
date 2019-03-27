import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  // "0x545c67cC924Ba1f57902d8d2660a005Df2940B03"
  "0x4d5FBE006e86c11aEa0e4F6799aD51D90931F0fd"
);

export default instance;
