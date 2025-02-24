import axios from 'axios';
import {BASE_URL_API} from './constants';

const getStory = async(id) => {
    try{
        const story = await axios.get(`${BASE_URL_API}/item/${id}.json`);
        return story; 
    }catch(err){
        console.log("Error while getting story");
    }
}

export const getStories = async(type)=>{
    try{
        const{data:storyIds} = await axios.get(`${BASE_URL_API}/${type}stories.json`);
        const stories = await Promise.all(storyIds.slice(0,30).map(getStory));
        return stories;
    }catch(err){
        console.log("Error while getting stories")
    }
}
