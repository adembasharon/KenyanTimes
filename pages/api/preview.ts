import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req:NextApiRequest, res:NextApiResponse){
    res.setPreviewData({});
    res.writeHead(3072, {Location:"/"});
    res.end();
}