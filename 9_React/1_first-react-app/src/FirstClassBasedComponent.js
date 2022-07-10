import React from "react";
import BlogCard from './BlogCard_Component';
import { isArrayEmpty} from './utils/Utils';

class FirstClassBasedComponent extends React.Component {

    state = {
        showCards: true,
        blogObjList: [
            {
                title: 'Title 1',
                description: "Oh, supercalifragilisticexpialidocious Even though the sound of it Is something quite atrocious If you say it loud enough You'll always sound precocious Supercalifragilisticexpialidocious",
                likeCount: 0
            },
            {
                title: 'Title 2',
                description: "Oh, supercalifragilisticexpialidocious Even though the sound of it Is something quite atrocious If you say it loud enough You'll always sound precocious Supercalifragilisticexpialidocious",
                likeCount: 0
            },
            {
                title: 'Title 3',
                description: "Oh, supercalifragilisticexpialidocious Even though the sound of it Is something quite atrocious If you say it loud enough You'll always sound precocious Supercalifragilisticexpialidocious",
                likeCount: 0
            }
        ]
    }

    showCards = true;


    
    onHideBtnClick = () => {
        let updateState = !this.state.showCards;
        this.setState((prevState, prevProps) => {
            return {showCards: !prevState.showCards}
        });
    }

    onLikeBtnClick = (pos) => {
        console.log(this.state);
        const updateBlogList = this.state.blogObjList;
        const updatedBlogObject = updateBlogList[pos];

        updatedBlogObject.likeCount = updatedBlogObject.likeCount + 1;
        
        updateBlogList[pos] = updatedBlogObject;

        this.setState({blogObjList: updateBlogList});
    }

    render() {
        const blogCardsComponents = isArrayEmpty(this.state.blogObjList) ? [] : this.state.blogObjList.map((item, pos) => {
            return (
                <BlogCard key={pos} title={item.title} description={item.description} likeCount={item.likeCount} onLikeBtnClick={() => this.onLikeBtnClick(pos)} />
            )
        });

        return (
            <div className="ClassBased">
                <h2>Creating class based component</h2>
                <button onClick={this.onHideBtnClick}>{this.state.showCards ? 'Hide' : 'Show'}</button>
                <br></br>
                {
                    this.state.showCards ? blogCardsComponents : null
                }
                
            </div>
        ) 
    }
}

export default FirstClassBasedComponent;