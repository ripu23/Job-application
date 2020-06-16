import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
    FETCH_JOBS,
    LIKE_JOB
} from './types';
import { JOB_TEST_DATA } from './test';

const JOB_ROOT_URL = 'https://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher: '',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
};

const buildJobsUrl = (zip) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip })
    return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => {
    return async (dispatch) => {
        try {
            // let zip = await reverseGeocode(region);
            // const url = buildJobsUrl(zip);
            // let { data } = await axios.get(url);
            let { data } = JOB_TEST_DATA;
            dispatch({ type: FETCH_JOBS, payload: data });
            callback();
        } catch (e) {
            console.log(e);
        }
    }
};

export const likeJob = (job) => {
    return {
        payload: job,
        type: LIKE_JOB
    };
}