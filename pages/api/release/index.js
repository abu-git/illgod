import dbConnect from "../../../lib/dbConnect"
import IllgodRelease from "../../../models/IllgodRelease"

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch(method){
        case 'GET':
            try{
                const blogs = await IllgodRelease.find({}) /* find all data in database */
                res.status(200).json({ success: true, data: releases })
            }catch(error){
                res.status(400).json({ success: false })
                console.log(error)
            }
            break
        case 'POST':
            try{
                const release = await IllgodRelease.create(req.body) /* create new model in database */
                res.status(201).json({ success: true, data: release })
            }catch(error){
                res.status(400).json({ success: false })
                console.log(error)
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}