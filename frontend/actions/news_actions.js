import * as APIUtil from '../util/news'

export const GET_NEWS = 'GET_NEWS'

export const fetchNews = () => dispatch => (
    APIUtil.fetchNews().then(news => dispatch({type: 'GET_NEWS', news}))
);