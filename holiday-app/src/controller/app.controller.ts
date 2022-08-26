import { Router } from "express";
import { appservice } from "../service/app.service";

export const router= Router();

router.get("/test1",function(req,res){
    const response= appservice.test();
    return res.status(response.status).json(response.data)
});

router.get("/country-list", async function(req,res){
    const response=await appservice.countryList();
    console.log(response.data)
    return res.status(response.status).json(response.data)
});

router.get("/test3/:a/:b",(req,res)=>{
    console.log(req.query);
    console.log(req.params);
    return res.status(200).json({message:"test3"});
});