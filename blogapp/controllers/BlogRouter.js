const express = require(`express`);
const BlogModel = require(`../models/BlogSchema`);

const router = express.Router();

//GET all blogs
router.get(`/`, async (req, res) => {
    try{
        const blogs = await BlogModel.find({})
        res.render('Blogs/Blogs', {Blogs:blogs})
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot create`);
    }
});

//GET: new blog
router.get(`/new`, async (req, res) => {
    try{
        res.render('Blogs/New')
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot create`);
    }
});

//POST: Create new Blog
// ^ Create a new Blog
router.post('/', async (req, res) => {
    // ^ Try-Catch Method
    try {
        // if (req.body.sponsored === 'on') {
        //     req.body.sponsored === true
        // } else {
        //     req.body.sponsored === false
        // }
        const newBlog = await BlogModel.create(req.body)
        // console.log(new)
        res.redirect('/blog')
        // res.send('Blog successfully created!')
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot create')

    }

})


//PuT: Update By ID
router.put(`/:id`, async (req,res)=>{
    try{
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' : "after"})
        res.send(updatedBlog)
    }catch (e) {
        console.log(e);
        res.status(403).send(`Cannot create`);
      }
})

//DELETE: Remove by ID
router.delete(`/:id`, async (req,res)=>{
    try{
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog)
        res.send(`Blog Deleted`)
    }catch (e) {
        console.log(e);
        res.status(403).send(`Cannot create`);
      }
})
module.exports = router;
