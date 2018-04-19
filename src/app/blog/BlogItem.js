import React from 'react';
import PageContent from '../components/PageContent';

const BlogItem = (props) => {
  return (
    <PageContent>
      <div className="box content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </PageContent>
  );
}
 
export default BlogItem;