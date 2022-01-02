import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0346078396De68506cE7cc52ABt85A4d6322b8e1'  // nº do contrato "exemplo"
);

export default instance;