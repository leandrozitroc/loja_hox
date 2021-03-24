import * as express from 'express'
import { RSA_NO_PADDING } from 'node:constants';
import { where } from 'sequelize/types';
import {knex} from "../Database/AdminDb"

class Products{
    async createProds (req:any, res:any){
        const dadosCreateProds = req.body
        
        try{
            if(dadosCreateProds.expirationDate > dadosCreateProds.manufacturingDate){
            const create = await knex
            .insert({CategoryId: dadosCreateProds.CategoryId,
                    name:dadosCreateProds.name,
                    manufacturingDate:dadosCreateProds.manufacturingDate,
                    perishableProduct:dadosCreateProds.perishableProduct,
                    expirationDate: dadosCreateProds.expirationDate,
                    price: dadosCreateProds.price}).into('prods');
        
            console.log("Produto Adicionado")
            res.json({Message:"Produto Adicionado"})

            } else {
                console.log('error')
                res.json({Error: 'data de vencimento menor que data de produção'})
            }

        } catch(error){
            console.log(error)
            res.json({error:error})
        }

    }

    async updateProducts (req: any, res:any){
        const dadosUpdateProdcts = req.body
        try{
            const update = await knex
                .table('prods')
                .where({id: dadosUpdateProdcts.id})
                .update(dadosUpdateProdcts)
            res.json({Message: 'Produto atualizado'})

            }catch(error){
                console.log(error)
                res.json({Error: error})
            }       
    }
    
    async deleteProducts (req:any,res:any){
        const dadosDeleteProducts = req.body
        try{
            const deleteProds = await knex
            .delete()
            .table('prods')
            .where({id:dadosDeleteProducts.id})
        console.log('Produto deletado')
        res.json({Message: 'Produto Deletado'})
        }catch(error){
            res.json({error: error});
            
            
        }
    }

    async showProduct (req:any, res:any){
        const dadosShowProduct = await req.body
        try{
            const showproduct = await knex
                .select()
                .table('prods')
                .where({id: dadosShowProduct.id})
        
            res.json(showproduct)
        }catch(error){
            res.json({Error: error })
        } 
    }   

    async indexProducts (req:any, res:any){
        const dadosIndexProducts = await req.body
        try{
            const indexprods = await knex
                .select()
                .table('prods')
            res.json(indexprods)
        }catch(error){
            res.json({Error: error})
        }
    }

    async indexByCategory (req:any, res: any){
        const dadosIndexByCategory = await req.body
        try{
            const indexbycat = await knex
                .select()
                .table('prods')
                .where({CategoryId: dadosIndexByCategory.CategoryId})
        
            res.json(indexbycat)    
        } catch(error){
            res.json({Error: error})
        }
        
    }
}

export default new Products