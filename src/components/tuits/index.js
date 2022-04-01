import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
const Tuits = ({tuits = [], refreshTuits}) => {
    const likeTuit = (tuit) => {
      // likesService.userUnDislikes("me", tuit._id)
      // .then(
          likesService.userLikesTuit("me", tuit._id)
          .then(refreshTuits)
          .catch(e => alert(e))
      // )
      // .catch(e => alert(e))

    }
    const forceUnlike = (tuit) => {
      // likesService.userUnlikes("me", tuit._id)
      // .then(refreshTuits)
      // .catch(e => alert(e))
    }
  const forceUnDislike = (tuit) => {
    // likesService.userUnDislikes("me", tuit._id)
    // .then(refreshTuits)
    // .catch(e => alert(e))
  }
    const deleteTuit = (tid) =>
        service.deleteTuit(tid)
            .then(refreshTuits);
    const dislikeTuit = (tuit) =>{
      likesService.userDislikesTuit("me", tuit._id)
      .then(refreshTuits)
      .catch(e => alert(e))
    }
    const doesUserLike = (tid) =>
        likesService.doesUserLikeTuit("me", tid)
        .then()
        .catch(e => alert(e))
    const doesUserDisLike = (tid) =>
        likesService.doesUserDisLikeTuit("me", tid)
        .then()
        .catch(e => alert(e))
    return (
        <div>
          <ul className="ttr-tuits list-group">
            {
              tuits.map && tuits.map(tuit =>
                  <Tuit key={tuit._id}
                        deleteTuit={deleteTuit}
                        likeTuit={likeTuit}
                        dislikeTuit={dislikeTuit}
                        tuit={tuit}
                        forceUnDislike={forceUnDislike}
                        forceUnlike={forceUnlike}
                  />)
            }
          </ul>
        </div>
      );
}

export default Tuits;