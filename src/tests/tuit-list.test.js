import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";
import {UserList} from "../components/profile/user-list";
import {findAllUsers} from "../services/users-service";

jest.mock('axios');

const MOCKED_USERS = [
    {username: 'ellen_ripley', password: 'lv426', email: 'repley@weyland.com', _id: "123"},
    {username: 'sarah_conor', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"},
]

const MOCKED_TUITS = [
    {tuit: 'the tuit body', postedBy: MOCKED_USERS[0], _id: "444"},
    {tuit: 'the other body', postedBy: MOCKED_USERS[2], _id: "333"}

];

test('tuit list renders static tuit array', () => {
    render(
        <HashRouter>
            <Tuits tuits={MOCKED_TUITS}/>
        </HashRouter>);
    const linkElement = screen.getByText(/the tuit body/i);
    expect(linkElement).toBeInTheDocument();
});

test('tuit list renders mocked', async () => {
    axios.get.mockImplementation(() =>
                                     Promise.resolve({data: {tuits: MOCKED_TUITS}}));
    const response = await findAllTuits();
    const tuits = response.tuits;

    render(
        <HashRouter>
            <Tuits tuits={tuits}/>
        </HashRouter>);
    const linkElement = screen.getByText(/the tuit body/i);
    expect(linkElement).toBeInTheDocument();
});
