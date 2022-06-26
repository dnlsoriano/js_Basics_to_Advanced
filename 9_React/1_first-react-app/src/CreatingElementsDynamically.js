import React from "react";
import './TestingStyles.css';
import BlogCard from './BlogCard';
import { isArrayEmpty} from './utils/Utils';

function DynamicElements() {

    const blogObjList = [
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

    const blogCards = blogObjList.map((item, pos) => {
        return (
            /* A key MUST be passed to the outer elements of the rendered list */
            <div className='card' key={pos}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        )
    });
    
    const blogCardsComponents = isArrayEmpty(blogObjList) ? [] : blogObjList.map((item, pos) => {
        return (
            <BlogCard key={pos} title={item.title} description={item.description} />
        )
    });

    const onHideBtnClick = () => {
        alert('Button clicked');
    }

    return (
        <div className="DynamicElements">
            <h2>Creating elements dynamically</h2>
            {blogCards}
            <h2>Using components and Passing data to them with props</h2>
            {blogCardsComponents}
        </div>
    );
}
    
export default DynamicElements;