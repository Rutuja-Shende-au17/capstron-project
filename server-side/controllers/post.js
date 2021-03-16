exports.getPosts=(req,res) => {
    res.json({
        posts:[
            {title:"firstpost"},{title:"second post"}
        ]
    });
};