const express = require(`express`);
const UserModel = require(`../models/UserSchema`);

const router = express.Router();

//GET all users
router.get(`/`, async (req, res) => {
    try{
        const users = await UserModel.find({})
        res.send(users)
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot GET`);
    }
});

// //GET: user by ID
// router.get(`/:id`, async (req, res) => {
//     try{
//         const users = await UserModel.findById(req.params.id)
//         res.send(users)
//     }
//     catch(e){
//         console.log(e);
//         res.status(403).send(`Cannot create`);
//     }
// });

//POST: Create new User
router.post(`/`, async (req, res) => {
  try {
    const userExists = await UserModel.find({email: req.body.email})
    console.log(userExists);

    if(userExists) {
        return res.send('User exists!');
    }
    const newUser = await UserModel.create(req.body);
    res.send(newUser);
  } catch (e) {
    console.log(e);
    res.status(403).send(`Cannot create`);
  }

  // console.log(req.body)
  // UserModel.create(req.body)
  // .then(data =>{
  //     console.log(data)
  //     res.send(data)
  // })
  // .catch(error =>{
  //     console.log(error)
  //     res.status(403).send(`Cannot create`)
  // })
});

//PuT: Update By ID
router.put(`/:id`, async (req,res)=>{
    try{
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' : "after"})
        res.send(updatedUser)
    }catch (e) {
        console.log(e);
        res.status(403).send(`Cannot create`);
      }
})

//DELETE: Remove by ID
router.delete(`/:id`, async (req,res)=>{
    try{
        const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
        console.log(deletedUser)
        res.send(`User Deleted`)
    }catch (e) {
        console.log(e);
        res.status(403).send(`Cannot create`);
      }
})
module.exports = router;
