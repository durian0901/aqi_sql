import models from "../models/index";
import _ from 'lodash';
import sequelize from 'sequelize';
import {brotliDecompressSync} from 'zlib';

const {users} = models;

class UserConstroller{
    getUser =async(req,res) =>{
        const {email} =req.query;
        const user = await users.findAll();
        const respone = _.map(user,(o)=>({
            ...o.dataValues,
            vip:true,
        }));
        res.status(200).json({respone})
    };

    postUser = async(req,res) =>{
        const{body}=req;
        const{email,password} = body
        const user =await users.create({
            email,
            password
        });
        res.status(200).json({user});
    };
    //Delete

    postDelete= async(req,res)=>{
        const{body}=req
        const{email}=body
        //抓Email刪除
        const user=await users.destroy({  
            where:{
                email
            }
        })
        res.status(200).json({user});
    };

    patchUpdate= async(req,res)=>{
        const{body}=req
        const{email,password}=body
        const user=await users.update({  
            //更改的資料
            password:password},{
                //抓位置
            where:{
                email
            }
        })
        res.status(200).json({user});
    };
}

export default new UserConstroller();
