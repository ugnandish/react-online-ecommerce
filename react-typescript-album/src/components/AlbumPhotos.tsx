import {AlbumList} from "../types/AlbumList";
import '../App.css';

export const AlbumPhotos = ({id, title, thumbnailUrl}:AlbumList) => {
    return (
        <div className="">
            <li key={id}>{title}</li>
            <img src={thumbnailUrl} alt="" /> 
        </div>
    )
}
