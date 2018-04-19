import React, { Component } from 'react';
import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem';
import PageHeader from './components/PageHeader';

class Blog extends Component {
  state = {
    posts: [],
  }

  client = contentful.createClient({
    space: 'b75hbmo7r1eh',
    accessToken: '54a0066025c5cb30e8a6a7cf7242a66e25ae1e76a12ce9c756c058bf78ad3ec6',
  });

  fetchPosts = () => {
    return this.client.getEntries()
  }
  
  setPosts = response => {
    this.setState({
      posts: response.items,
    });
  }

  componentDidMount() {
    this.fetchPosts().then(this.setPosts)      
  }

  render() {
    const blogPosts = this.state.posts.map(( {fields}, i ) =>
      <BlogItem key={i} {...fields} />
    );
 
    return ( 
      <div>
        <PageHeader color="is-info" title="My Blog">My personal blog, build with React.js and Contentul CMS</PageHeader>
        {blogPosts}
      </div>
    )
  }
}
 
export default Blog;