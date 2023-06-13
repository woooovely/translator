import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const translateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { text, source, target } = req.body;

      const response = await axios.post(
        'https://openapi.naver.com/v1/papago/n2mt',
        {
          source: source,
          target: target,
          text: text,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Naver-Client-Id': 'P3BXAyxueZRvMMDSOpVV',
            'X-Naver-Client-Secret': 'DSR3ssy7xn',
            'Access-Control-Allow-Origin': '*', // 모든 도메인에 대해 CORS 허용
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // 허용되는 HTTP 메소드
          },
        }
      );

      const translated = response.data?.message?.result?.translatedText;

      res.status(200).json({ translatedText: translated || '' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Translation failed' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default translateHandler;
