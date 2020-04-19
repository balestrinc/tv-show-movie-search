import DefaultImage from "./../DefaultImage";

export default (show) => {
    return {
        id: show.id,
        title: show.name,
        images: {
            medium: show.image && show.image.medium ? show.image.medium : DefaultImage,
            original: show.image && show.image.original ? show.image.original : DefaultImage,
        },
        duration: show.runtime,
        schedule: show.schedule,
        status: show.status,
        showType: show.type,
        genres: show.genres
    }
}
