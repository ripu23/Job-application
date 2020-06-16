import _ from 'lodash';
import { PERSIST_REHYDRATE } from 'redux-persist/lib/constants';
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case LIKE_JOB:
            return _.uniqBy([
                action.payload, ...state
            ], 'jobkey');
        case CLEAR_LIKED_JOBS:
            return [];
        case PERSIST_REHYDRATE:
            return action.payload.likedJobs || [];
        default:
            return state;
    }
}