import { GET_NEWS } from "../actions/news_actions";

const newsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case(GET_NEWS):
        let news_keys = Object.keys(action.news)
        let news_return = {}
        for (let i = 0; i < 10; i++) {
            news_return[i] = action.news[news_keys[i]]
        }
        return Object.assign({}, oldState, news_return)
    default:
        return oldState
    }
}

export default newsReducer