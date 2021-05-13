import * as React from 'react';
import {Fragment, useState} from "react";
import Blog from "../ValueObject/Blog";
import {Card, Col, Row} from "react-bootstrap";
import classNames from "classnames";

type BlogViewProps = {
    blog: Blog
}

export const BlogView = ({ blog }: BlogViewProps) => {
    const [selectedPost, setSelectedPost] = useState(blog.posts[0].id);

    return <Fragment>
        <Row>
            <h1>{blog.title}</h1>
            <p>{blog.descripton}</p>
            <p>Last Update: {blog.lastBuildDate.toDateString()}</p>
        </Row>
        <Row>
            <Col md={3}>
                {blog.posts.map((post, index) => {
                    return <div key={index} onClick={event => setSelectedPost(post.id)}>
                        <Card
                            className={classNames({
                                menuCard: true,
                                active: post.id == selectedPost
                            })}
                        >
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                })}
            </Col>
            <Col md={9}>
                {blog.posts.map((post, index) => {
                    if (post.id != selectedPost) {
                        return;
                    }

                    return <Card className={'contentCard'}>
                        <Card.Header>
                            <Card.Title>{post.title}</Card.Title>
                        </Card.Header>
                        <Card.Body dangerouslySetInnerHTML={{__html: post.content}}/>
                        <Card.Footer>
                            {post.categories.map((category: string, categoryIndex) => {
                                return <span key={categoryIndex} className={'categoryTag'}>{category}</span>;
                            })}
                            <hr/>
                            <Card.Text className={'float-left'}>{post.author} - {post.pubDate.toDateString()}</Card.Text>
                        </Card.Footer>
                    </Card>
                })}
            </Col>
        </Row>
    </Fragment>;
}
