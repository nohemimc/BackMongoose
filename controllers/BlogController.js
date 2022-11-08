const blogService = require ("../services/BlogService")

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs()
        res.json ({
            data: blogs,
            status: "success"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.createBlog = async (req, res) => {
    try {
        const blog = await blogService.createBlog(req.body)
        res.json({
            data: blog,
            status: "success"
        })
        // console.log(req.body);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.getBlogById = async (req, res) => {
    try {
        const blog = await blogService.getBlogById(req.params.id)
        res.json({
            data: blog,
            status: "success"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const blog = await blogService.updateBlog(req.params.id, req.body.data)
        res.json({
            data: blog,
            status: "success"
        })
        console.log(req.params.id);
        console.log(req.body.data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await blogService.deleteBlog(req.params.id)
        res.json({
            data: blog,
            status: "success"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

/*
    Creación del controller
    Consumo de los servicios para:  
        crear un blog
        obtener todos los blogs
        conseguir un blog
        actualizar un blog
        borrar un blog por su id
    
    try catch para el manejo de errores y garantizar que el ssrvidor no falle

    Devolvemos los datos con un statusde "success"para cada controlador. Si ocurre un error, 
    devolvemos el error con un estado de 500

*/