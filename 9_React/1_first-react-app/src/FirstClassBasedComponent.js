import React from "react";
import BlogCard from './BlogCard';
import { isArrayEmpty} from './utils/Utils';

class FirstClassBasedComponent extends React.Component {

    state = {
        showCards: true
    }

    showCards = true;

    blogObjList = [
        {
            title: 'Title 1',
            description: "Oh, supercalifragilisticexpialidocious Even though the sound of it Is something quite atrocious If you say it loud enough You'll always sound precocious Supercalifragilisticexpialidocious"
        },
        {
            title: 'Title 2',
            description: "Oh, supercalifragilisticexpialidocious Even though the sound of it Is something quite atrocious If you say it loud enough You'll always sound precocious Supercalifragilisticexpialidocious"
        },
        {
            title: 'Title 3',
            description: "Oh, supercalifragilisticexpialidocious Even though the sound of it Is something quite atrocious If you say it loud enough You'll always sound precocious Supercalifragilisticexpialidocious"
        }
    ]

    blogCardsComponents = isArrayEmpty(this.blogObjList) ? [] : this.blogObjList.map((item, pos) => {
        return (
            <BlogCard key={pos} title={item.title} description={item.description} />
        )
    });

    onHideBtnClick = () => {
        this.setState({showCards: false});
    }

    render() {
        return (
            <div className="ClassBased">
                <h2>Creating class based component</h2>
                <button onClick={this.onHideBtnClick}>Hide List</button>
                <br></br>
                {
                    this.state.showCards ? this.blogCardsComponents : null
                }
                
            </div>
        ) 
    }
}

export default FirstClassBasedComponent;