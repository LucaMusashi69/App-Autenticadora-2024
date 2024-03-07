import {Router} from "express";
const router = Router();

let users=[ //Arreglo y objeto
    {
id: 1,
name:"Karim",
address: "Añaxd",
age: 85,
    }
]

//post
router.post('/users/create', (req,res)=>{
//Body
users.push(req.body)
res.send(" mikerules");
})

router.get('/users', ( req,res )=>{
    res.status(200).json(users)
});
//Put 
router.put('/users/update/:id',(req,res)=>{
const user = users.find(u=>u.id === req.params.id);
if (!user){
    res.status(404).send("El recurso no se encuentra!!!");
    return
}
const updateUser={...user,...req.body}
users=user.map(u=>u.id ===req.params.id? updateUser : u);
res.status(200).send("Usuario actualizado con exito!!")
})
export  default router;rr