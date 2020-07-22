
let Objet = {
    removeBlankSpace : (str)=>{
        if (!str){
            return ''
        }
        str = str.toLowerCase()
        str = str.split(" ").join("")
        str  = str.toLowerCase()
        return str
    },
    containSubstring: (str,substr)=>{
        str = Objet.removeBlankSpace(str)
        substr = Objet.removeBlankSpace(substr)
        if (str.includes(substr)){
            return true
        }
        else{
            return false
        }
    }
}
module.exports = Objet