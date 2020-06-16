const reverseGeocode = require('latlng-to-zip');

reverseGeocode({
    longitude: -122,
    latitude: 37,
}, 'AIzaSyDdABhh1coN1eBaarr79q_UGbDik5Tohnc')
    .then(zipcode => { console.log(zipcode) })
    .catch(err => console.log(err));

export const JOB_TEST_DATA = {
    data: {
        results: [
            {
                jobtitle: 'Junior Java Developer',
                company: 'Pragmatics, Inc.',
                latitude: 30.266483,
                longitude: -97.74176,
                jobkey: '1',
                formattedRelativeTime: '10 days ago',
                snippet: 'Expert level knowledge of Java and related technologies.',
                url: 'https://react-native-elements.github.io/react-native-elements/docs/button.html#buttonstyle'
            },
            {
                jobtitle: 'Java Developer',
                company: 'Cognizant',
                latitude: 33.419170,
                longitude: -111.922350,
                jobkey: '2',
                formattedRelativeTime: '6 days ago',
                snippet: 'We are looking for Java developer for an immediate need. The applicants should have good experience in Javascript.',
                url: 'https://react-native-elements.github.io/react-native-elements/docs/button.html#buttonstyle'
            },
            {
                jobtitle: 'Software Engineer (Java, Agile)',
                company: 'Travelers',
                latitude: 33.430174,
                longitude: -111.968655,
                jobkey: '3',
                formattedRelativeTime: '1 week ago',
                snippet: 'We are looking for Java developer for an immediate need. The applicants should have good experience in Javascript.',
                url: 'https://react-native-elements.github.io/react-native-elements/docs/button.html#buttonstyle'
            }
        ]
    }
}