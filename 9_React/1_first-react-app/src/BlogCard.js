import React from "react";
// Importing modules
import { dumpLogs } from "./utils/Utils";
// Using CSS modules
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    dumpLogs(props);
    const {pos, title, description} = props;
    return(
        <div className={classes.BlogCard} key={pos}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default BlogCard;