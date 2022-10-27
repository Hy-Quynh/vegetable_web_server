const { Pool } = require('pg')

// POSTGRES_USER = 'postgres'
// POSTGRES_HOST = 'localhost'
// POSTGRES_DB = 'vegetable-web'
// POSTGRES_PWD = '123456'
// POSTGRES_PORT = '5432'


POSTGRES_USER = 'bsrdknlbvibjkg'
POSTGRES_HOST = 'ec2-44-193-178-122.compute-1.amazonaws.com'
POSTGRES_DB = 'dclt7ulbp6iv13'
POSTGRES_PWD = '871331c93a5766a5315fcfcae200d447885b34c220d0011e229b390e957f2d8c'
POSTGRES_PORT = '5432'

//postgres://bsrdknlbvibjkg:871331c93a5766a5315fcfcae200d447885b34c220d0011e229b390e957f2d8c@ec2-44-193-178-122.compute-1.amazonaws.com:5432/dclt7ulbp6iv13

const pgConfig = {
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  password: POSTGRES_PWD,
  port: POSTGRES_PORT,
  ssl: true
}

const pool = new Pool(pgConfig)
/**
 *
 * @param {String} queryStr
 * @returns Object
 */

const query = async (queryStr) => {
  const client = await pool.connect()
  try {
    return await client.query(queryStr)
  } catch (error) {
    console.log('error >>> ', error)
    throw error
  } finally {
    client.release()
  }
}

module.exports.postgresql = {
  query,
}
