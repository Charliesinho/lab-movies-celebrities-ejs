//  Add your code here
const { Schema, model } = require('mongoose')

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    genre: {
      type: String,
      required: true,
      default: "unknown"
    },    
    plot: {
      type: String,
      required: true,
    },
    cast: {
        type: [Schema.Types.ObjectId],
        ref: 'Celebrity',
      },
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const movieModel = model('Movies', movieSchema)

module.exports = movieModel