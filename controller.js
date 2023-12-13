import admin_schema from './admin.model.js'
import staff_schema from './staff.model.js'
import student_schema from './students.model.js'
import bcrypt from 'bcrypt'
// import jsonwebtoken from 'jsonwebtoken'
import pkg from "jsonwebtoken";
const {sign}=pkg

export async function addAdmin(req,res){
    try {
        const {name,username,password}=req.body;
        console.log(name,username,password);
        if(!(name&&username&&password))
        return res.status(404).send("fields are empty")
    
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            admin_schema.create({name,username,password:hashedPwd});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
    
}



export async function adminLogin(req, res) {
    try {
     console.log(req.body);
     const { username, password } = req.body;
     const usr = await admin_schema.findOne({ username })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error); 
}
}


export async function addStaff(req,res){
    try {
        console.log("hai",req.body);
        const {admin,empid,name,username,phone,password,confirmpassword,email,designation,salary,expirience,address,photo}=req.body;
        console.log(admin,empid,name,username,phone,password,confirmpassword,email,designation,salary,expirience,address,photo);
        if(!(admin&&empid&&name&&username&&phone&&password&&confirmpassword&&email&&designation&&salary&&expirience&&address&&photo))
        return res.status(404).send("fields are empty")
        if(password!=confirmpassword)
        return res.status(404).send("password and confirm password are not same")
       
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            staff_schema.create({admin,empid,name,username,phone,password:hashedPwd,confirmpassword,email,designation,salary,expirience,address,photo});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
}

export async function staffLogin(req, res) {
    try {
     console.log(req.body);
     const { username, password } = req.body;
     const usr = await staff_schema.findOne({ username })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error);

}
}

export async function getFullstaff(req,res){
    let task=await staff_schema.find()
    res.status(200).send(task)
}

export async function getfullDetails(req,res){
    const{id}=req.params;
    // console.log(id);
    let task=await staff_schema.findOne({_id:id})
    console.log(task);
    res.status(200).send(task)
}

export function deleteStaff(req,res)
{
    const{id}=req.params;
    const data=staff_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)          
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function editStaff(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await staff_schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
}

export async function forgotUsername(req,res){
    const phone=req.params;
    console.log(phone);
    let task=await staff_schema.findOne(phone)
    console.log(task);
    res.status(200).send(task)
}


export async function staffFrgtPwd(req, res) {
    const phone = req.params.phone;
    const updatedPassword = req.body.password;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(updatedPassword, saltRounds);
    let task = await staff_schema.updateOne({ phone }, { $set: { password: hashedPassword } });
    res.status(200).send(task);
}


export async function addStudent(req, res) {
    try {
        console.log("hai", req.body);
        const { ...studentDetails } = req.body;

        await student_schema.create({ ...studentDetails }); 

        res.status(201).send("Successfully registered");
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || "Internal Server Error");
    }
}


export async function getStudents(req,res){
    let task=await student_schema.find()
    res.status(200).send(task)
}

export function deleteStudent(req,res)
{
    const{id}=req.params;
    const data=student_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)          
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function getStudentDetails(req,res){
    const{id}=req.params;
    let task=await student_schema.findOne({_id:id})
    console.log(task);
    res.status(200).send(task)
}

export async function EditStudentDetails(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await student_schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
}

export async function home(req,res)
{
  try {
    console.log(req.user);
    const name=req.user.usr.name
    console.log(name);
    res.status(200).send({msg:`${name}`})
  } catch (error) {
    res.status(404).send(error)
  }
}

export async function StudentLogin(req, res) {
    try {
    
      const { studentid, dob } = req.body;
      const user = await student_schema.findOne({ studentid });
       console.log(user._id);
        if (!user) {
        return res.status(404).send("User not found");
      }
        if (dob !== user.dob) {
        return res.status(401).send("Incorrect date of birth");
      }
      const{_id}=user
        const token = sign({ _id }, process.env.JWT_KEY, { expiresIn: "30m" });
        
        res.status(200).send({ msg: "Successfully logged in", token });
        } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  export async function GetDtsilsLoginedStudent(req,res){

         let task=await student_schema.findOne({_id:req.user._id})
         console.log(task);
         res.status(200).send({task})
}
  

