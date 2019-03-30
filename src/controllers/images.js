import { db } from '../app.js';

export function getAll(req, res, next) {
  let query = 'SELECT image FROM images';
  if (db.state === 'authenticated') {
    db.query(query, (err, result) => {
      if (err) throw err;
      res.contentType('image/jpeg');
      const imgs = result.map((row) => row.image);
      console.log(imgs);
      res.send(imgs);
    });
  }
};
