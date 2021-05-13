import * as React from "react";
import {Component, Fragment} from 'react';
import Blog from "./ValueObject/Blog";
import BlogRepository from "./Repository/BlogRepository";
import {BlogView} from "./Component/BlogView";
import {Container} from "react-bootstrap";

type AppProps = {
    ajaxUrl: string;
}

type AppState = {
    blog: Blog;
}

class App extends Component<AppProps, AppState> {
    private blogRepository: BlogRepository;

    constructor(props: any) {
        super(props);

        this.blogRepository = new BlogRepository(this.props.ajaxUrl);
        this.state          = {blog: null}

        this.blogRepository.getBlog()
            .then(blog => {
                this.setState({blog})
            })
        ;
    }

    render() {
        const {blog} = this.state;

        return (
            <Fragment>
                <Container>
                    {blog != null && <BlogView blog={blog}/> || <h1>Loading</h1>}
                </Container>
            </Fragment>
        )
    }
}

export default App;