import {createUser, deleteUsersByUsername} from "../services/users-service";
import {
    createTuit,
    deleteTuitByContent,
    findAllTuits,
    findTuitById
} from "../services/tuits-service";

describe('can create tuit with REST API', () => {
  // TODO: implement this
    const theUser = {
        username: 'user',
        password: 'pass',
        email: 'email'
    };

    const theTuit = {
        tuit: 'Hi its my tuit',
        postedOn: '2021-12-25T00:00:00.000Z',


    };

    // setup test before running test
    beforeAll(() => {
        deleteUsersByUsername(theUser.username);
        return deleteTuitByContent("Hi its my tuit");

    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        deleteUsersByUsername(theUser.username);
        return deleteTuitByContent("Hi its my tuit");
    })

    test('can insert new tuits with REST API', async () => {
        // insert new user in the database

        const newUser = await createUser(theUser);

        theTuit.postedBy = newUser._id
        const newTuit = await createTuit(theTuit);

        // verify inserted user's properties match parameter user
        expect(newTuit.tuit).toEqual(theTuit.tuit);
        expect(newTuit.postedOn).toEqual(theTuit.postedOn);

    });
});

describe('can delete tuit wtih REST API', () => {
    // TODO: implement this
    const theUser = {
        username: 'user',
        password: 'pass',
        email: 'email'
    };

    const theTuit = {
        tuit: 'Hi its my tuit',
        postedOn: '2021-12-25T00:00:00.000Z',


    };

    // setup test before running test
    beforeAll(() => {
        deleteUsersByUsername(theUser.username);
        return deleteTuitByContent("Hi its my tuit");

    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        deleteUsersByUsername(theUser.username);
        return deleteTuitByContent("Hi its my tuit");
    })

    test('can delete inserted tuits with REST API', async () => {
        // insert new user in the database

        const newUser = await createUser(theUser);

        theTuit.postedBy = newUser._id
        const newTuit = await createTuit(theTuit);

        const status = await deleteTuitByContent(theTuit.tuit);

        // verify we deleted at least one user by their username
        expect(status.deletedCount).toBeGreaterThanOrEqual(1);

    });
});

describe('can retrieve a tuit by their primary key with REST API', () => {
  // TODO: implement this
    const theUser = {
        username: 'user',
        password: 'pass',
        email: 'email'
    };

    const theTuit = {
        tuit: 'Hi its my tuit',
        postedOn: '2021-12-25T00:00:00.000Z',


    };

    // setup test before running test
    beforeAll(() => {
        deleteUsersByUsername(theUser.username);
        return deleteTuitByContent("Hi its my tuit");

    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        deleteUsersByUsername(theUser.username);
        return deleteTuitByContent("Hi its my tuit");
    })

    test('can find tuits with REST API', async () => {
        // insert new user in the database

        const newUser = await createUser(theUser);

        theTuit.postedBy = newUser._id
        const newTuit = await createTuit(theTuit);

        const foundTuit = await findTuitById(newTuit._id)
        // verify inserted user's properties match parameter user
        expect(foundTuit.tuit).toEqual(theTuit.tuit);
        expect(foundTuit.postedOn).toEqual(theTuit.postedOn);

    });
});

describe('can retrieve all tuits with REST API', () => {
  // TODO: implement this
    const theUser = {
        username: 'user',
        password: 'pass',
        email: 'email'
    };

    const theTuit = {
        tuit: 'Hi its my tuit',
        postedOn: '2021-12-25T00:00:00.000Z',


    };

    // setup test before running test
    beforeAll(() => {
        deleteUsersByUsername(theUser.username);
        return deleteTuitByContent("Hi its my tuit");

    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        deleteUsersByUsername(theUser.username);
        deleteTuitByContent("Hi its my tuit");
        deleteTuitByContent("Hi its my tuit");
        deleteTuitByContent("Hi its my tuit");
        return deleteTuitByContent("Hi its my tuit");
    })

    test('can find all tuits with REST API', async () => {
        // insert new user in the database

        const newUser = await createUser(theUser);

        theTuit.postedBy = newUser._id
        const newTuit = await createTuit(theTuit);
        await createTuit(theTuit);
        await createTuit(theTuit);
        await createTuit(theTuit);

        const tuits = await findAllTuits()
        // verify inserted user's properties match parameter user
        expect(tuits.length).toBeGreaterThanOrEqual(4);


    });
});