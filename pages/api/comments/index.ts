import { NextApiRequest, NextApiResponse } from "next";


const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === 'POST') {
        const id = req.query.id; 
        await fetch(`http://localhost:3001/items/${id}`, {
            headers: {
                'Content-type': 'application/json',
            },
            method: 'POST',
            body: req.body
        })
        return res.status(201).json({ hola: 'mundo'});
    }

    if( req.method === 'GET') {
        const response = await fetch('http://localhost:3001/items', {
           headers: {
            'content-type': 'application/json',
           },
        })

        const coments = await response.json();
        return res.status(200).json(coments);
    }

    return res.status(200).json({error: 'el Metodo no existe'})
}


export default handler;