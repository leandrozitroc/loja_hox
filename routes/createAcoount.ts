import {knex} from "../Database/AdminDb"
import * as express from 'express'
import * as bcrypt from 'bcryptjs'

 class CreateAcc1{
  

    
   async createacc (req: any,res: any) {
       const dados = await req.body
      
       if(knex.select()
       .table('users')
       .where({email: dados.email})){
           await knex.insert({email:dados.email, password: bcrypt.hashSync(dados.password)}).into('users')
           .then(data=>{
               console.log(data)
               res.status(200)
               res.json({CreateAccount:'aceito'})

           }).catch(error=>{
               console.log(error)
               res.status(403)
               res.json({Error:error})
           

           })
       

        }       
   }
}


export default new CreateAcc1()