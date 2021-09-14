import * as APIUtil from '../util/positions'

export const RECEIVE_POS = 'RECEIVE_POS'

export const findPositions = acctId => dispatch => (
    APIUtil.findPositions(acctId)
        .then(positions => dispatch({ type: 'RECEIVE_POS', positions}))
);