const mongoose = require('mongoose');

const cruiseShipSchema = new mongoose.Schema({
    shipName: {
        type: String,
        required: true
    },
    packageName: {
        type: String,
        required: true
    },
    packageCategoryName: {
        type: String,
        required: true
    },
    packageDays: {
        type: String,
        required: true
    },
    packageShortDescription: {
        type: String,
        required: true
    },
    packageCoverDescription: {
        type: String,
        required: true
    },
    packageCoverImage: {
        type: String,
        required: true
    },
    packageImageLinks: {
        type: Array,
        required: true
    },
    packageTitle: {
        type: String,
        required: true
    },
    packageSubTitle: {
        type: String,
        required: true
    },
    packageTotalSeats: {
        type: Number,
        required: true
    },
    itenary: [{
        dayNumber: Number,
        dayName: String,
        location: { type: Array },
        description: String,
        optionalDescription: String
    }],
    locations: [{
        name: String,
        prices: Number,
        availableDates: [{
            dayName: String,
            availability: Boolean
        }]
    }],
    hotels: [{
        hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotels' },
        hotelRoomDesc: String,
        hotelLocationDesc: String
    }],
    packageDate: {
        type: String,
        required: true
    },
    prices: {
        group: {
            single: { type: Number, required: true },
            double: { type: Number, required: true },
            triple: { type: Number, required: true }
        },
        private: {
            single: { type: Number, required: true },
            double: { type: Number, required: true },
            triple: { type: Number, required: true }
        }
    }
});

module.exports = mongoose.model('CruiseShips', cruiseShipSchema);
