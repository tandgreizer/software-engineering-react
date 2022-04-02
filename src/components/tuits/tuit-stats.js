import React from "react";

const TuitStats = ({tuit, likeTuit, dislikeTuit, liked, disliked = () => {}}) => {
    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
          {tuit.stats && tuit.stats.replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit.stats && tuit.stats.retuits}
        </div>
        <div className="col">
          <span onClick={() => {likeTuit(tuit);}}>
              {
                tuit.stats && tuit.stats.likes && tuit.stats.likes > 0 &&
                  <i className="fas fa-thumbs-up me-1" style={{color: 'black'}}></i>
              }
              {
                tuit.stats && tuit.stats.likes && tuit.stats.likes <= 0 &&
                  <i className="far fa-thumbs-up me-1"></i>
              }
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>
        <div className="col">
          <span onClick={() => {dislikeTuit(tuit);}}>
              {
                  tuit.stats && tuit.stats.dislikes && tuit.stats.dislikes > 0 &&
                  <i className="fas fa-thumbs-down me-1" style={{color: 'black'}}></i>
              }
              {
                  tuit.stats && tuit.stats.dislikes && tuit.stats.dislikes <= 0 &&
                  <i className="far fa-thumbs-down me-1"></i>
              }
              {tuit.stats && tuit.stats.dislikes}
          </span>
        </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
}
export default TuitStats;