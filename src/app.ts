import axios from 'axios';
import express, { Request, Response, NextFunction, request } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
let ret = '';
let call:string = '';
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  if(call !== req.query.source){
    call = req.query.source as string;
    if(req.query.source){
      await axios.get( call,{}).then(response=>{
          ret = response.data;
      });
    }
  }
  res.send('');
});

app.get('/url', async (req: Request, res: Response, next: NextFunction) => {
  res.send(ret);
});

app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});

export interface CookieOptions {
  maxAge?: number | undefined;
  signed?: boolean | undefined;
  expires?: Date | undefined;
  httpOnly?: boolean | undefined;
  path?: string | undefined;
  domain?: string | undefined;
  secure?: boolean | undefined;
  encode?: ((val: string) => string) | undefined;
  sameSite?: boolean | 'lax' | 'strict' | 'none' | undefined;
}