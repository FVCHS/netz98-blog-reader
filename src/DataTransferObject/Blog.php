<?php


namespace App\DataTransferObject;


use DateTime;
use JsonSerializable;

class Blog implements JsonSerializable
{
    /** @var string */
    private $title;

    /** @var string */
    private $descripton;

    /** @var DateTime */
    private $lastBuildDate;

    /** @var array */
    private $posts;

    public function __construct(string $title, string $descripton, DateTime $lastBuildDate, array $posts)
    {
        $this->title         = $title;
        $this->descripton    = $descripton;
        $this->lastBuildDate = $lastBuildDate;
        $this->posts         = $posts;
    }

    public static function fromXmlArray(array $data, array $posts): Blog
    {
        return new Blog(
            (string)$data['title'],
            (string)$data['description'],
            new DateTime($data['lastBuildDate']),
            $posts
        );
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getDescripton(): string
    {
        return $this->descripton;
    }

    public function getLastBuildDate(): DateTime
    {
        return $this->lastBuildDate;
    }

    public function getPosts(): array
    {
        return $this->posts;
    }

    public function jsonSerialize(): array
    {
        return get_object_vars($this);
    }
}