import React from "react";

class NewsArticleItem extends React.Component {
    render() {
        const {datetime, headline, image, source, summary, url} = this.props
        const date = new Date(datetime * 1000)
        const new_datetime = (date.getMonth() + 1) + '/' + date.getDate()+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes()+date.getSeconds()
        return(
            <div className='ind-article'>
                <a href={url} className='article-link'></a>
                {/* <h1>{url}</h1> */}
                <div className='article-header'>
                    <h1>{source}</h1>
                    <h1>{new_datetime}</h1>
                </div>
                <div className='article-info-n-pic'>
                    <div className='article-headline-n-summary'>
                        <h1>{headline}</h1>
                        <h1>{summary}</h1>
                    </div>
                    <img src={image} className='article-pic'></img>
                </div>
            </div>
        )
    }
}

export default NewsArticleItem