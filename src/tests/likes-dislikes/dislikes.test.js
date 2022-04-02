import renderer from 'react-test-renderer';
import TuitStats from "../../components/tuits/tuit-stats";
import {act,create} from 'react-test-renderer'


test('dislike incriments', () => {
    let stats = {
        dislikes: 5,
        replies: 234,
        retuits: 345,

    }

    const dislikeTuit = () => {
        act(() => {
            stats.dislikes++;
            tuitStats.update(
                <TuitStats
                    tuit={{stats: stats}}
                    dislikeTuit={() => {}}
                />)
        })
    }

    let tuitStats
    act(() => {
        tuitStats = create(
            <TuitStats
                dislikeTuit={dislikeTuit}
                tuit={{stats: stats}}/>
        );
    })

    const root = tuitStats.root;
    const dislikesCounter = root.findByProps({className: 'ttr-stats-dislikes'})
    const retuitsCounter = root.findByProps({className: 'ttr-stats-retuits'})
    const repliesCounter = root.findByProps({className: 'ttr-stats-replies'})
    const likeTuitButton = root.findByProps(
        {className: 'ttr-dislike-tuit-click'})

    let dislikesText = dislikesCounter.children[0];
    const repliesText = repliesCounter.children[0];
    const retuitsText = retuitsCounter.children[0];
    expect(dislikesText).toBe('5');
    expect(repliesText).toBe('234');
    expect(retuitsText).toBe('345');

    act(() => {likeTuitButton.props.onClick()})
    dislikesText = dislikesCounter.children[0];
    expect(dislikesText).toBe('6');


});