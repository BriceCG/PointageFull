module.exports = {
    inDatabase: async (Model, options) => {
        let existingModel = await Model.findOne({
            where: options
        })
        if (existingModel) {
            return true
        }
        else{
            return false
        }
    }
}