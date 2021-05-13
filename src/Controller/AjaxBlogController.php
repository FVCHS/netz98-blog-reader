<?php

namespace App\Controller;

use App\Service\Netz98BlogReader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AjaxBlogController extends AbstractController
{
    /**
     * @Route("/blog", name="blog")
     */
    public function index(Netz98BlogReader $blogReader): Response
    {
        return new JsonResponse($blogReader->read());
    }
}
