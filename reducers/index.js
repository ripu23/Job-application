// import { combineReducers } from 'redux';
import auth from './authReducer';
import jobs from './jobsReducer'
import likedJobs from './likesReducer';

export default ({
    auth,
    jobs,
    likedJobs
})