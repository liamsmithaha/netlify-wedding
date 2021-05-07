const faunaDB = require('faunadb')
const dbName = new faunaDB.Client({
  secret: process.env.SECRET
})

exports.handler = async () => {
  return dbName.query(faunaDB.query.Paginate(faunaDB.query.Match(faunaDB.query.Index("guests")))).then(indexedData => {
    const data = indexedData.data.map((i) => i.data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate'
      }
    }
  }
}
