import Blog from "../ValueObject/Blog";
import PostDeserializer from "./PostDeserializer";

class BlogDeserializer {
    public static deserialize(data: any): Blog {
        return new Blog(
            data.title,
            data.descripton,
            new Date(data.lastBuildDate.date),
            data.posts.map((postData: any) => {
                return PostDeserializer.deserialize(postData);
            })
        );
    }
}

export default BlogDeserializer;