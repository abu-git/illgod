import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const IllgodReleaseSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    content: {
        type: String,
    },
    tracklist: {
        type: String,
    },
    releaseDate: {
        type: String,
    },
    spotify: {
        type: String,
    },
    youtube: {
        type: String,
    },
    itunes: {
        type: String,
    },
    tidal: {
        type: String,
    },
    bandcamp: {
        type: String,
    },
    audiomack: {
        type: String,
    },
    img: {
        type: String,
    },
    slug: {
        type: String,
    },
    metaImage: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

/* Paginate plugin setup */
IllgodReleaseSchema.plugin(mongoosePaginate)

export default mongoose.models.IllgodRelease || mongoose.model('IllgodRelease', IllgodReleaseSchema)