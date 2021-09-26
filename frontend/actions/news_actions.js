import * as APIUtil from '../util/news'

export const GET_NEWS = 'GET_NEWS'

export const fetchNews = (api_key) => dispatch => (
    APIUtil.fetchNews(api_key).then(news => dispatch({type: 'GET_NEWS', news}))
);