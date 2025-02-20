//  Add your code here
const { Schema, model } = require('mongoose')

const celebritiesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    occupation: {
      type: String,
      required: true,
      default: "unknown"
    },    
    catchPhrase: {
      type: String,
      required: true,
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Celebrity = model('Celebrity', celebritiesSchema)

module.exports = Celebrity