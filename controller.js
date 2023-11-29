import admin_schema from './admin.model.js'
import staff_schema from './staff.model.js'

export async function addAdmin(req,res){
    const {name,username,password}=req.body
    res.status(201).send(admin_schema.create({name,username,password}));
}
export async function addStaff(req,res){
    const {name,username,password}=req.body
    res.status(201).send(staff_schema.create({name,username,password}));
}
