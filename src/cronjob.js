import cron from 'node-cron';
import Token from './models/Token.js';

const EVERY_MINUTE = '* * * * *';

cron.schedule(EVERY_MINUTE, async () => {
  const tokens = await Token.findAll({ raw: true });
  const now = new Date();

  tokens.forEach((item) => {
    if (item.expireDate < now) Token.destroy({ where: { token: item.token } });
  });
});
