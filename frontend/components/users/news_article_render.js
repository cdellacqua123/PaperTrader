import React from "react";

class NewsArticleItem extends React.Component {
    render() {
        const {datetime, headline, image, source, summary, url} = this.props
        return(
            <div className='ind-article'>
                <a href={url} className='article-link'></a>
                <div>
                    <h1>{source}</h1>
                    <h1>{datetime}</h1>
                </div>
                <div>
                    <h1>{headline}</h1>
                    <h1>{summary}</h1>
                    <img src={image} className='article-pic'></img>
                </div>
            </div>
        )
    }
}

export default NewsArticleItem