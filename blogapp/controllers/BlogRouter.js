const express = require("express");
const BlogModel = require("../models/BlogSchema");

const router = express.Router();

// GET: All Blogs
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    res.render("Blogs/Blogs", { blogs: blogs });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

// Create Blog Form
router.get("/new", (req, res) => {
  try {
    res.render("Blogs/CreateBlog");
  } catch (error) {
    console.log(error);
    res.status(403).send("Not found");
  }
});

// POST: CREATE a New Blog
router.post("/", async (req, res) => {
  try {
    if (req.body.sponsored === "on") {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false;
    }
    const newBlog = await BlogModel.create(req.body);
    res.redirect("/blog");
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot create");
  }
});

// GET: Blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.render("Blogs/Show", { blog: blog });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

// Render the Edit Form
router.get('/:id/edit', async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id)
    res.render('Blogs/Edit', {blog: blog})
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
})

// PUT: Update By ID
router.put("/:id", async (req, res) => {
  try {
    if (req.body.sponsored === "on") {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false;
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.redirect('/blog')
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot put");
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id);
    console.log(deletedBlog);
    res.redirect('/blog');
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot put");
  }
});

module.exports = router;