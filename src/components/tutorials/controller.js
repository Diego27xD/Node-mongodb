import Tutorial from "../../models/Tutorial";
import Tag from "../../models/Tag";
export const findAll = async (req, res) => {
    try {
        const tutoriales = await Tutorial.find().populate("tags")
        res.json({
            ok: true,
            data: tutoriales
        })
    } catch (error) {
        res.json({
            ok:false,
            error: error.message,
        })
    }
}

export const create = async (req, res) => {
    try {
        const { body } = req;
        const tutorial = new Tutorial({author: body.author, title: body.title})
        const tags = new Tag(body.tag)
        //console.log(title, author, tag.name)
        const data = await Tutorial.find({author: body.author})
        console.log(data.length)
        console.log(data)
        await tags.save()
        if(data.length>0){
            console.log("Id", data[0]._id)
            await Tutorial.findByIdAndUpdate(
                data[0]._id,
                { $push: { tags: tags._id } },
                { new: true, useFindAndModify: false }
            );
        }else{
            //console.log(result)
            await tutorial.save()
            //console.log(tutorial._id, tags._id)
            await Tutorial.findByIdAndUpdate(
                tutorial._id,
                { $push: { tags: tags._id } },
                { new: true, useFindAndModify: false }
            );
        }
        res.json({
            ok:true,
            data: tutorial
        })
    } catch (error) {
        res.json({
            ok:false,
            error: error.message
        })
    }
}

/* const addTagToTutorial = async (_id, tag)=>{
    const a = await Tag.findByIdAndUpdate(
        _id,
        { $push: { tags: tag } },
        { new: true, useFindAndModify: false }
    );
    console.log(a)
} */