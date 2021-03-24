import * as express from 'express'
import {knex} from "../Database/AdminDb"

class Category{

    async addCategory(req:any, res:any){
        const dadosAddcategory = req.body
        
        try{
            if(dadosAddcategory != undefined){
                const add = await knex
                .insert({CategoryId: dadosAddcategory.CategoryId})
                .into('categorys')
                
            res.json({Message: 'Categoria Adicionada'})


            }else{
                console.log('error')
                res.json({Error: "Error"})
            }
       }catch(error) {
            res.json(error)
       }

    }   


    async delCategory(req:any, res:any){
        const dadosDelCategory = await req.body
        try{
                if(dadosDelCategory != undefined){
                    const del = await knex
                    .delete()
                    .from("categorys")
                    .where({id:dadosDelCategory.id})

                console.log('Deleted')
                res.json({Message: "Categoria Deletada"})
            } else{
                console.log('Error')
            }
        
        } catch(error){
            res.json(error);
            
        } 

    }

    async updateCategory(req:any,res:any){
        const dadosUpdateCategory = await req.body
        
        try{
            if(dadosUpdateCategory!= undefined){
                const update = await knex
                .table('categorys')
                .where({id:dadosUpdateCategory.id})
                .update({CategoryId:dadosUpdateCategory.CategoryId})
                
            
            res.json({Message: "Atualizado com sucesso"})
            
            } else {
                console.log("error")
            }
        } catch(error){
            res.json({Error: error})
        }
   }

   async showCategory(req:any, res:any){
       const dadosShowCategory = await req.body
       try{
           if(dadosShowCategory != undefined){
                const show = await knex
                .select()
                .table('categorys')
                .where({CategoryId:dadosShowCategory.CategoryId})
            console.log(show)
            res.json(show)
       
            } else{
                console.log('error')
            }
        }catch(error){
            res.json(error)
        }  
    
    }   

    async indexCategorys(req:any,res:any){
        const dadoIndexCategory = await req.body
        if(dadoIndexCategory != undefined){
            const index = await knex
            .select()
            .table('categorys')
        console.log(index)
        res.json(index)
        
        } else{
            console.log('error')
        }

    } 

    

}



export default new Category()