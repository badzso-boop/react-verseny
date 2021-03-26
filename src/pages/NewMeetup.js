import {useHistory, useRouteMatch} from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
            'url/meetups',
            {
                method: 'POST',
                body: JSON.stringify(meetupData), // -> data
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    );
}

export default NewMeetupPage;