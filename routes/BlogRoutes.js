const express = require("express")

const {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog
} = require("../controllers/BlogController")

const router = express.Router()

router.route("/").get(getAllBlogs).post(createBlog)
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog)

module.exports = router

/*

    Importación de controllers
    Definición de rutas para cada controller utilizando el enrutador de express

*/