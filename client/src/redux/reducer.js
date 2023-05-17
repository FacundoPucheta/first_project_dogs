

const initialState = {
    dogs: [
        {
            "id": 1,
            "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
            "name": "Affenpinscher",
            "weight": "3 - 6",
            "height": "23 - 29",
            "life_span": "10 - 12 years",
            "belongToDb": false,
            "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
        },
        {
            "id": 2,
            "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
            "name": "Afghan Hound",
            "weight": "23 - 27",
            "height": "64 - 69",
            "life_span": "10 - 13 years",
            "belongToDb": false,
            "temperament": "Aloof, Clownish, Dignified, Independent, Happy"
        },
        {
            "id": 3,
            "image": "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
            "name": "African Hunting Dog",
            "weight": "20 - 30",
            "height": "76",
            "life_span": "11 years",
            "belongToDb": false,
            "temperament": "Wild, Hardworking, Dutiful"
        },
        {
            "id": 4,
            "image": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
            "name": "Airedale Terrier",
            "weight": "18 - 29",
            "height": "53 - 58",
            "life_span": "10 - 13 years",
            "belongToDb": false,
            "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous"
        },
        {
            "id": 5,
            "image": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
            "name": "Akbash Dog",
            "weight": "41 - 54",
            "height": "71 - 86",
            "life_span": "10 - 12 years",
            "belongToDb": false,
            "temperament": "Loyal, Independent, Intelligent, Brave"
        }
    ],
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        default:
            return {...state};
    }
};


export default reducer;