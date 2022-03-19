// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {services} from '../../data'
import {NextApiRequest, NextApiResponse} from "next"

const handle = (req:NextApiRequest, res:NextApiResponse) => {
  res.status(200).send(services)
}

export default handle
