<?php

namespace App\Service;

use App\DataTransferObject\Blog;
use App\DataTransferObject\Post;
use Symfony\Component\Serializer\Encoder\XmlEncoder;

class Netz98BlogReader
{
    public function read(): Blog
    {
        $xmlEncoder = new XmlEncoder();
        $decoded    = $xmlEncoder->decode(file_get_contents('https://dev98.de/feed'), 'xml');
        $posts      = [];

        foreach ($decoded['channel']['item'] as $channelItem) {
            $posts []= Post::fromXmlArray($channelItem);
        }

        return Blog::fromXmlArray($decoded['channel'], $posts);
    }
}