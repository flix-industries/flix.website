import functions from 'firebase-functions';

const config = {
    apiKey: functions.config().todoservice.apikey,
    authDomain: functions.config().todoservice.authdomain,
    databaseURL: functions.config().todoservice.databaseurl,
    projectId: functions.config().todoservice.projectid,
    storageBucket: functions.config().todoservice.storagebucket,
    messagingSenderId: functions.config().todoservice.messagingsenderid,
};

export default config;