import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material';
import Feed from './Components/Feed'
import VideoDetail from './Components/VideoDetail'
import ChannelDetail from './Components/ChannelDetail'
import SearchDetail from './Components/SearchDetail'
import Navbar from './Components/Navbar';

function App() {
  return (
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchDetail/>}/>
      </Routes>

    </Box>
  );
}

export default App;
