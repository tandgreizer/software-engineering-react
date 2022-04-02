import {act, create} from "react-test-renderer"

import Tuits from "../../components/tuits";
import MyLikes from "../../components/profile/my-likes";
import {findAllTuits} from "../../services/tuits-service";
import {render, screen} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuitsDisLikedByUser, findAllTuitsLikedByUser} from "../../services/likes-service";


//The my likes screen cannot be given info, therefore the only way to test tuits on it is to query
//the server
test('my Liked Tuits', async () => {


    const tuits = await findAllTuitsLikedByUser("624221dc464aea7c844a1f93");
    expect(tuits.length).toEqual(2)


})
test('my disliked Tuits', async () => {


    const tuits = await findAllTuitsDisLikedByUser("624221dc464aea7c844a1f93");
    expect(tuits.length).toEqual(3)


})