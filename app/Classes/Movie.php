<?php

class Movie
{
    private int $id;
    private string $title;
    private string $releaseDate;
    private string $description;
    private string $thumbnail;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Movie
     *
     */
    public function setId(int $id): Movie

    {
        $this->id = $id;
        return $this;
    }


    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return Movie
     *
     */
    public function setTitle(string $title): Movie

    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function getReleaseDate(): string
    {
        return $this->releaseDate;
    }

    /**
     * @param string $releaseDate
     * @return Movie
     *
     */
    public function setReleaseDate(string $releaseDate): Movie

    {
        $this->releaseDate = $releaseDate;
        return $this;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     * @return Movie
     *
     */
    public function setDescription(string $description): Movie

    {
        $this->description = $description;
        return $this;
    }


    /**
     * @return string
     */
    public function getThumbnail(): string
    {
        return $this->thumbnail;
    }

    /**
     * @param string $thumbnail
     * @return Movie
     *
     */
    public function setThumbnail(string $thumbnail): Movie

    {
        $this->thumbnail = $thumbnail;
        return $this;
    }
}
