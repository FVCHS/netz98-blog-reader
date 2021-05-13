import Post from "../ValueObject/Post";

class PostDeserializer {
    public static deserialize(data: any) {
        return new Post(
            data.id,
            data.title,
            data.link,
            data.author,
            new Date(data.pubDate.date),
            data.categories,
            data.description,
            data.content
        );
    }
}

export default PostDeserializer;