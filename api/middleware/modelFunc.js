module.exports = {
    findOne: async (Model, id,attributes) => {
        let model = await Model.findOne({
            attributes:attributes,
            where: {
                id: id
            }
        })
        if (model) {
            return model
        }
        else{
            return false
        }


    }
}