import config from '../../../config';

const redis = config.tokenStoreType === 'redis' ? require('redis') : null;

let RedisClient: any = null;

if (config.tokenStoreType === 'redis') {
  RedisClient = redis.createClient({
    url: config.db.redisHost,
    legacyMode: true,
  });
  RedisClient.connect();
}

export default RedisClient;
