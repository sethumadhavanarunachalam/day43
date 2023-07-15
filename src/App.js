import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
// import {IconButton,InfoIcon} from '@mui/material/IconButton';
import { Card, IconButton} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { minHeight } from '@mui/system';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFormik } from 'formik';
import * as yup from 'yup';

const data = 
  [
    {
    "id": "99",
    "name": "Vikram",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    "rating": 8.4,
    "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
    "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    },
    {
    "id": "100",
    "name": "RRR",
    "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
    "id": "101",
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
    "id": "102",
    "name": "No Country for Old Men",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
    "id": "103",
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
    "id": "104",
    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
    "id": "105",
    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
    "id": "106",
    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
    "id": "107",
    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
    "name": "PS2",
    "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
    "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
    "rating": 8,
    "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
    "id": "108"
    },
    {
    "name": "Thor: Ragnarok",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
    "rating": 8.8,
    "trailer": "https://youtu.be/NgsQ8mVkN8w",
    "id": "109"
    
  
}]

function MovieDetails(){
  const {id} = useParams();

  const [movie, setMovie] = useState([]);
  useEffect(()=>{
    fetch(`https://639ef22a7aaf11ceb88e8981.mockapi.io/movies/${id}`)
    .then((data) => data.json())
    .then((mvs) => setMovie(mvs));
  })
  const navigate = useNavigate();
  return<div className="movie-details-body">
  <div className="movie-details">
     <iframe 
     width="100%"
      height="550"
       src={movie.trailer}
        title="RRR Trailer (Tamil) - NTR | Ram Charan | Ajay Devgn | Alia Bhatt | SS Rajamouli | Mar 25th 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="rating-name-moviedetails"><h1>{movie.name}</h1>
       
        
          <h4>⭐{movie.rating}</h4>
      </div>
    <p>{movie.summary}</p>
    <Button onClick={()=> navigate(-1)} variant="contained" startIcon={<KeyboardBackspaceIcon/>}>
  back
</Button>
  </div>
  </div>
}

function AddMovie({movieList,setMovieList}){
  const navigate = useNavigate();
  
  const [name,setName]=useState("");
  const [poster,setPoster]=useState("");
  const [rating,setRating]=useState("");
  const [summary,setSummary]=useState("");
  const [trailer,setTrailor]=useState("");
  
  const addMovie = () => {
    const newMovie = {
      name:name,
      poster:poster,
      rating:rating,
      summary:summary,
      trailer:trailer,
    };
    //  setMovieList([...movieList,newMovie])
    fetch("https://639ef22a7aaf11ceb88e8981.mockapi.io/movies",{
      method:"POST",
      body: JSON.stringify(newMovie),
      headers:{"C     ontent-type":"application/json"},
    }).then(() => navigate("/movielist"))
    // .then((mvs) => setMovieList(mvs));
    
    
  }
  return<div className="input-box">

    <input placeholder="name" onChange={(event)=> setName(event.target.value)}/>
    <input placeholder="poster" onChange={(event)=> setPoster(event.target.value)} />
    <input placeholder="rating"  onChange={(event)=> setRating(event.target.value)}/>
    <input placeholder="summary" onChange={(event)=> setSummary(event.target.value)}/>
    <input placeholder="trailor" onChange={(event)=> setTrailor(event.target.value)}/>
    <button onClick={addMovie}>addmovie</button>
  </div>;
}


  function MovieList(){
    const [movieList,setMovieList]= useState([]);
    
    const getMovie = () => {
      fetch("http://localhost:5000/moviedata/get")
      .then((data) => data.json())
      
      .then((mvs) => setMovieList(mvs.data));
      
      
    }
  
    useEffect(()=> {
      getMovie()
      
    })
    const deleteMovie = (id)=> {
      fetch(`https://639ef22a7aaf11ceb88e8981.mockapi.io/movies/${id}`,{
        method:"DELETE"
      })
      .then((data) => getMovie())
    }
    
    return(
      <div>                                         
  <div className="movie-list">
    {movieList.map((mv)=> (
      <div key={mv.id}>
    <Movie movie={mv} id={mv.id} deletebutton={<IconButton
    sx={{marginLeft:"auto"}}
    color='error' onClick={()=> deleteMovie(mv.id)}><DeleteIcon/></IconButton>}/> </div>))}
    </div>
    </div>
  );
}


function Home(){
  return <div><h1>sethu</h1></div>
}
function Movie({movie,id,deletebutton}){
  const navigate = useNavigate();
  return(
    <Card className="movie-container">
        <CardContent>
        <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={movie.poster}
      />
     
      <div className="rating-name">
      <h1>{movie.name}</h1>
        <h2><IconButton
        color="primary"
        onClick={() => navigate (`/movie/${id}`)}
        aria-label= "Toggle Summary">
          
          <InfoIcon/>
        </IconButton>
        </h2>
          <h4>⭐{movie.rating}</h4>
      </div>
        <p>{movie.summary}</p>
        </CardContent>
        <CardActions>
        {/* <Counter/> */}
        {deletebutton}
          
        </CardActions>
    </Card>
    );    
  }
  

function App(){


  
   const navigate = useNavigate();
   const [mode,setMode]= useState("dark");
    
   const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return(
    <ThemeProvider theme={darkTheme}>
      <Paper   elevation={4} />
  <div>
  
     <AppBar position="static">
        <Toolbar>
          <IconButton
           
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={()=> navigate("/")} variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            Home
          </Typography>
          <Typography onClick={()=> navigate("/movielist")} variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            Movie
          </Typography>
          
          <Typography onClick={()=> navigate("/addmovie")} variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            AddMovie
          </Typography>
          <Button sx={{marginLeft:"auto"}} color="inherit"  onClick={()=> setMode(mode === "light" ? "dark" : "light")}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            {mode === "light" ? "dark" : "light"}mode</Button>
        </Toolbar>
      </AppBar>
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/movielist" element={<MovieList   />} />
     
        <Route path="/movie" element={<Movie  />} />
        <Route path="/movie/:id" element={<MovieDetails  />} />
        <Route path="/addmovie" element={<AddMovie />} />
    
          
     
      </Routes>
</div>
<Paper/>
</ThemeProvider>
)}
export default App;
