import { Router, Request, Response } from "express";
import { PharmacyClient } from "../service/pharmacy";
import { ProductClient } from "../service/products";

const router = Router();

router.get('/pharmacy/:cnpj', async (req: Request, res: Response)=>{

    const { cnpj } = req.params;
    //@ts-ignore
    const response = await PharmacyClient.read({ cnpj: cnpj }, (err, notes) => {
        if (err) return res.status(500).send();
        if(notes.error) res.status(500).json({error: 'Error reading the data.'});
        res.status(200).send(notes)
      });
    
})
router.put('/pharmacy', async( req: Request, res: Response)=>{
  

  //@ts-ignore
  await PharmacyClient.create({pharmacy: req.body}, (err, notes) =>{
    if (err) return res.status(500).send();
    return res.status(200).send(notes)  
  });
})
router.put('/pharmacy/update', async(req: Request, res: Response)=>{
  //@ts-ignore
  await PharmacyClient.update({pharmacy: req.body},(err, notes)=>{
    if (err) return res.status(500).send();
    if(notes.done) return res.status(200).send();
    else return res.status(500).send({error:  'Error updating register.'})
  })

})

router.delete('/pharmacy/:cnpj', async (req: Request, res: Response)=>{
  const { cnpj } = req.params;
  //@ts-ignores
  await PharmacyClient.del({ cnpj },(err, notes)=>{
    if (err) return res.status(500).send();
    if(notes.done) return res.status(200).send();
    else return res.status(500).send({error:  'Error deleting register.'})
  })
})
router.post('/pharmacy/addBranch', async(req: Request, res: Response)=>{
  const { cnpj, branch } = req.body;
  //@ts-ignore
  await PharmacyClient.add({ cnpj, branch }, (err, notes)=>{
    if (err) return res.status(500).send();
    if(notes) return res.status(200).send(notes);
    else return res.status(500).send({error: 'Error adding branch.'})
  })
})

//Products routes

router.put('/product', async(req: Request, res: Response)=>{

  //@ts-ignore
  await ProductClient.create({product: req.body}, (err, notes) =>{
    if (err) return res.status(500).send();
    return res.status(200).send(notes)  
  });
  
});

router.get('/product/:name', async (req: Request, res: Response)=>{

  const { name } = req.params;
  //@ts-ignore
  const response = await ProductClient.read({ name: name }, (err, notes) => {
      if (err) return res.status(500).send();
      if(notes.error) res.status(500).json({error: 'Error reading the data.'});
      res.status(200).send(notes)
    });
  
})

router.put('/product/update', async(req: Request, res: Response)=>{
  //@ts-ignore
  await ProductClient.update({product: req.body },(err, notes)=>{
    if (err) return res.status(500).send();
    if(notes.done) return res.status(200).send();
    else return res.status(500).send({error:  'Error updating register.'})
  })

}),
router.delete('/product/:id', async (req: Request, res: Response)=>{
  const { id } = req.params;
  //@ts-ignores
  await ProductClient.del({ id },(err, notes)=>{
    if (err) return res.status(500).send();
    if(notes.done) return res.status(200).send();
    else return res.status(500).send({error: 'Error deleting register.'})
  })
})

router.put('/product/clone/:id', async(req: Request, res: Response)=>{
  const { id } = req.params;
  //@ts-ignore
  await ProductClient.clone({id: id},(err, notes)=>{
    if (err) return res.status(500).send();
    return res.status(200).send(notes);
  })

})

export { router };