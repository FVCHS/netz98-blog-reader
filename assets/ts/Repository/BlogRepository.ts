import Blog from "../ValueObject/Blog";
import axios from "axios";
import BlogDeserializer from "../Serializer/BlogDeserializer";

class BlogRepository {
    private blogUrl: string;

    constructor(blogUrl: string) {
        this.blogUrl = blogUrl;
    }

    getBlog(): Promise<Blog> {
        return new Promise<Blog>((resolve, reject) => {
            axios.get(this.blogUrl)
                .then(result => {
                    resolve(BlogDeserializer.deserialize(result.data));
                })
                .catch(error => {
                    reject(error);
                })
            ;
        });
    }
}

export default BlogRepository;