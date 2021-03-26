import MeetupList from '../components/meetups/MeetupList';
const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is Budapest',
        image: 'https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
        address: 'Futrinka utca 17/b',
        description: 'Ez az utca nagyon szép hely!'
    },
    {
        id: 'm2',
        title: 'This is Veszprém',
        image: 'https://images.unsplash.com/photo-1549233431-7331182cf126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1325&q=80',
        address: 'Futrinka utca 17/b',
        description: 'Ez az utca nagyon szép hely!'
    }
]

function AllMeetupsPage() {
    return (
    <div>
        <h1>All Meetups Page</h1>    
        <MeetupList  meetups={DUMMY_DATA}/>
    </div>);
}

export default AllMeetupsPage;