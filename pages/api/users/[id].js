import nc from 'next-connect';
import excuteQuery from "../../../db/db";

const handler = nc();

handler.post(async (req, res) => {
try{
  const result = await excuteQuery({
        query: 'SELECT * FROM users WHERE name = ?',
        values: [ req.query.id ]
    });
  if(result.length > 0){
    res.status(200).send(result);
  }else{
    res.status(500).send({message:'Invalid username'});
  }
  
}catch{
    res.status(500).send({message:'Invalid username'});
}
  
});

export default handler;