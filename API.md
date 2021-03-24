**Criar Conta**
--------
* **URL**
http://xxx/createAccount

* **Method**

 `POST`

* **DATA PARAMS**
  **Required**
  'email=[string]'
  'password=[string]'
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{message:'aceito'}
    
* **Error Message**
  * **Code** 403<br/>
  * **Content** '{error:error}'

---------

**Login**
--------
* **URL**
http://xxx/login

* **Method**

 `POST`

* **DATA PARAMS**
  **Required**
  'email=[string]'
  'password=[string]'
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{message:'Login aceito'} / {token:BearerToken}
    
* **Error Message**
  * **Code** 403<br/>
  * **Content** '{error:error}' / {error: Email Invalido} / {error: Email não encontrado} / {error: falha ao gerar token}
 
 ------------
 
 **Adicionar Categoria**
 
--------
* **URL**
http://xxx/addCategory

* **Method**

 `POST`

* **DATA PARAMS**
  **Required**
  'CategoryId=[string]'
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{message:'Categoria Adicionada'}
    
* **Error Message**
  * **Code** 403<br/>
  * **Content** '{error:error}'

--------------

**Deletar Categoria**
--------
* **URL**
http://xxx/delCategory

* **Method**

 `DELETE`

* **DATA PARAMS**
  **Required**
  'id=[Integer]'
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{message:'Categoria Deletada'}
    
* **Error Message**
  * **Code** 400<br/>
  * **Content** '{error:error}'

-------------

**Atualizar Categoria**
--------
* **URL**
http://xxx/updateCategory

* **Method**

 `PUT`

* **DATA PARAMS**
  **Required**
  'id=[Integer]'
  
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{message:'Atualizada com sucesso'}
    
* **Error Message**
  * **Code** 400<br/>
  * **Content** '{error:error}'

--------------

**Mostrar Categoria**
--------
* **URL**
http://xxx/showCategory

* **Method**

 `GET`

* **DATA PARAMS**
  **Required**
  'CategoryId=[String]'
  
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{
        'id =[Integer]',<br/>
        'CategoryId = [string]',<br/>
        'created_at = [DATE]',<br/>
        'updated_at = [DATE]',<br/>
        
    }
    
* **Error Message**
  * **Code** 400<br/>
  * **Content** '{error:error}'

---------------

**Mostrar Categorias**
--------
* **URL**
http://xxx/indexCategory

* **Method**

 `GET`

* **DATA PARAMS**
  **Required**
  
  
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{
        'id = [Integer]',<br/>
        'CategoryId = [string]',<br/>
        'created_at = [DATE]',<br/>
        'updated_at =[DATE]',<br/>
        
    }
    
* **Error Message**
  * **Code** 400<br/>
  * **Content** '{error:error}'

---------

**Criar Produto**
--------
* **URL**
http://xxx/createProduct

* **Method**

 `POST`

* **DATA PARAMS**
  **Required**<br/>
  'CategoryId = [string'], <br/> 
  'name =  [string]', <br/>
  'manufacturingDate' = [Date], <br/>
  'perishableProduct' = [Boolean], <br/>
  'expirationDate = [DATE]'
  'price = [integer]', <br/> 
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{message:'Produto Adicionado'}
    
* **Error Message**
  * **Code** 400<br/>
  * **Content** '{error:error}' / '{Error: 'data de vencimento menor que data de produção'} 

---------

**Atualizar Produto**
--------
* **URL**
http://xxx/updateProduct

* **Method**

 `PUT`

* **DATA PARAMS**
  **Optional**<br/>
  'CategoryId = [string'], <br/> 
  'name =  [string]', <br/>
  'manufacturingDate' = [Date], <br/>
  'perishableProduct' = [Boolean], <br/>
  'expirationDate = [DATE]'
  'price = [integer]', <br/> 
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{message:'Produto Atualizado'}
    
* **Error Message**
  * **Code** 400<br/>
  * **Content** '{error:error}' 

---------

**Apagar Produto**
--------
* **URL**
http://xxx/deleteProducts

* **Method**

 `DELETE`

* **DATA PARAMS**
  **Required**<br/>
  'id=[integer]'
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{message:'Produto deletado'}
    
* **Error Message**
  * **Code** 400<br/>
  * **Content** '{error:error}'  

---------

**Mostrar Produto**
--------
* **URL**
http://xxx/showProduct

* **Method**

 `GET`

* **DATA PARAMS**
  **Required**
  'id=[integer]'
  
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{
  'CategoryId = [string'], <br/> 
  'name =  [string]', <br/>
  'manufacturingDate' = [Date], <br/>
  'perishableProduct' = [Boolean], <br/>
  'expirationDate = [DATE]'
  'price = [integer]', <br/> 
    
    
* **Error Message**
  * **Code** 400<br/>
  * **Content** '{error:error}'

---------------

**Mostrar Produtos**
--------
* **URL**
http://xxx/indexProducts

* **Method**

 `GET`

* **DATA PARAMS**
  **Required**
  
  
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{
  'CategoryId = [string'], <br/> 
  'name =  [string]', <br/>
  'manufacturingDate' = [Date], <br/>
  'perishableProduct' = [Boolean], <br/>
  'expirationDate = [DATE]'
  'price = [integer]', <br/> 
    
    
* **Error Message**
  * **Code** 400<br/>
  * **Content** '{error:error}'

---------------

**Mostrar Produtos Pela Categorua**
--------
* **URL**
http://xxx/indexByCategory

* **Method**

 `GET`

* **DATA PARAMS**
  **Required**
  'CategoryId = [string]'
  
 
* **Sucess Response**
  * **Code** 200<br/>
  * **Content** '{
  'CategoryId = [string'], <br/> 
  'name =  [string]', <br/>
  'manufacturingDate' = [Date], <br/>
  'perishableProduct' = [Boolean], <br/>
  'expirationDate = [DATE]'
  'price = [integer]', <br/> 
    
    
* **Error Message**
  * **Code** 400<br/>
  * **Content** '{error:error}'

---------------

