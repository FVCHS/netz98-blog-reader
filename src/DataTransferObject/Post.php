<?php


namespace App\DataTransferObject;


use DateTime;
use JsonSerializable;

class Post implements JsonSerializable
{
    /** @var int */
    private $id;

    /** @var string */
    private $title;

    /** @var string */
    private $link;

    /** @var string */
    private $author;

    /** @var DateTime */
    private $pubDate;

    /** @var string[] */
    private $categories;

    /** @var string */
    private $description;

    /** @var string */
    private $content;

    /**
     * @param string[] $categories
     */
    public function __construct(
        int $id,
        string $title,
        string $link,
        string $author,
        DateTime $pubDate,
        array $categories,
        string $description,
        string $content
    ) {
        $this->id = $id;
        $this->title = $title;
        $this->link = $link;
        $this->author = $author;
        $this->pubDate = $pubDate;
        $this->categories = $categories;
        $this->description = $description;
        $this->content = $content;
    }

    public static function fromXmlArray(array $data): Post
    {
        return new Post(
            $data['post-id'],
            $data['title'],
            $data['link'],
            $data['dc:creator'],
            new DateTime($data['pubDate']),
            !is_array($data['category']) ? [$data['category']] : $data['category'],
            $data['description'],
            $data['content:encoded']
        );
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getLink(): string
    {
        return $this->link;
    }

    public function getAuthor(): string
    {
        return $this->author;
    }

    public function getPubDate(): DateTime
    {
        return $this->pubDate;
    }

    /** @return string[] */
    public function getCategories(): array
    {
        return $this->categories;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function jsonSerialize(): array
    {
        return get_object_vars($this);
    }
}