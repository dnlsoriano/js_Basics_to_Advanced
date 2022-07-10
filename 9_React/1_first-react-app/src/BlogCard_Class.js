import React, { Component } from "react";
// Importing modules
import { dumpLogs } from "./utils/Utils";
// Using CSS modules
import classes from './BlogCard.module.css';

class BlogCard extends Component {
    state = {
        likeCount: 0
    }

    onLikeButtonClick = () => {
        this.setState((prevState, prevProps) => {
            return {likeCount : prevState.likeCount + 1}
        })
    }

    render() {
        dumpLogs(this.props);
        return(
            <div className={classes.BlogCard}>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>

                <p>Like Count: <span className={classes.likeCount}>{this.state.likeCount}</span></p>
                <button onClick={this.onLikeButtonClick}>Like</button>
            </div>
        )
    } 
}

export default BlogCard;