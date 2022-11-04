import Tag from "../../models/Tag";

export const findAll = async(req, res) => {
    try {
        const tags = await Tag.find().populate("tutorials")
        res.json({
            ok: true,
            data: tags
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
        const tag = new Tag(body)
        await tag.save();
        res.json({
            ok: true,
            data: tag,
        })
    } catch (error) {
        res.json({
            ok: false,
            message: error.message,
        })
    }
}

