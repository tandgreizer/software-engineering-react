import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";
import {UserList} from "../components/profile/user-list";
import {findAllUsers} from "../services/users-service";


const MOCKED_USERS = [
  {username: 'ellen_ripley', password: 'lv426', email: 'repley@weyland.com', _id: "123"},
  {username: 'sarah_conor', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"},
]

const MOCKED_TUITS = [
  {tuit: 'the tuit body', postedBy: MOCKED_USERS[0], _id: "444"},
  {tuit: 'the other body', postedBy: MOCKED_USERS[2], _id: "333"}

];


test('tuit list renders async', async () => {
       const tuits = await findAllTuits();
       render(
           <HashRouter>
             <Tuits tuits={tuits}/>
           </HashRouter>);
       const linkElement = screen.getByText(/Tuit body text/i);
       expect(linkElement).toBeInTheDocument();
}

);
