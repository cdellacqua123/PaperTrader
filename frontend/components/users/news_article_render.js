import React from "react";

class NewsArticleItem extends React.Component {
    render() {
        const {datetime, headline, image, source, summary, url} = this.props
        const date = new Date(datetime * 1000)
        const new_datetime = (date.getMonth() + 1) + '/' + date.getDate()+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes()+date.getSeconds()
        return(
            <div className='ind-article'>
                <a href={url} className='article-link'>
                {/* <h1>{url}</h1> */}
                <div className='article-header'>
                    <h1 className='article-source'>{source}</h1>
                    <h1 className='article-date'>{new_datetime}</h1>
                </div>
                <div className='article-info-n-pic'>
                    <div className='article-headline-n-summary'>
                        <h1 className='article-headline'>{headline}</h1>
                        <p className='article-summary'>{summary}</p>
                    </div>
                    <img src={image} className='article-pic'></img>
                </div>
                </a>
            </div>
        )
    }
}

export default NewsArticleItem