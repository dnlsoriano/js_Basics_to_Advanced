import React from "react";
// Importing modules
import { dumpLogs } from "./utils/Utils";
// Using CSS modules
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    const {pos, title, description, likeCount, onLikeBtnClick} = props;

    dumpLogs(props);

    return(
        <div className={classes.BlogCard} key={pos}>
            <h3>{title}</h3>
            <p>{description}</p>

            <p>Like Count: <span className={classes.likeCount}>{likeCount}</span></p>
            <button onClick={onLikeBtnClick}>Like</button>
        </div>
    )
}

export default BlogCard;