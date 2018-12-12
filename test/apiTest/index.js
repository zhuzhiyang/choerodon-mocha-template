
import chai from 'chai';
import chaiHttp from 'chai-http';
import utils from '../../Utils';
import './statusService/statusApi.test';

chai.should();
chai.use(chaiHttp);
global.before(function () {
  const reqBody = {
    username: utils.config.loginName,
    password: utils.config.loginPass,
  };

  return utils.login(reqBody, 'success');
});

global.after(() => utils.logout());
