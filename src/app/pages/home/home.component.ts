import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../global/services/movies/movies.service';
import { Router } from '@angular/router';
import { SocketsService } from '../../global/services/sockets/sockets.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies=[];
  category:string='';
  search:string='';

  constructor(private moviesService:MoviesService, private router:Router, private socket:SocketsService, private toastr:ToastrService) { }
  ngOnInit(): void {
    this.getMovies();
    this.socket.on('watchedMovies', (data)=>{
      const userName = data.user || 'Alguien';
      console.log(`dataToastr: ${data.original_title}`);
      this.toastr.success(`${userName} añadió a su lista:  
      <a href="/movie/${data.id}" target="_blank">${data.original_title}</a>`, 'Watched!',{
        enableHtml: true
      });

    })
  }

  watched(item){
    console.log("movieHomeCompnt: " + item.original_title);
    console.log(item);
    this.socket.emit('watchedMovies', item);
    let movieData={
      "id":item.id,
      "original_title":item.original_title,
      "poster_path":item.poster_path
    }
    this.moviesService.watchMovie(movieData).then(data =>{
      console.log('Se marco como vista');
    }).catch(err =>{
      console.log(err);
    })
  }

  toWatch(item){
    console.log("movieHomeCompnt: " + item.original_title);
    console.log(item);
    let movieData={
      "id":item.id,
      "original_title":item.original_title,
      "poster_path":item.poster_path
    }
    this.moviesService.toWatchMovie(movieData).then(data =>{
      console.log('Se agregó a la lista 2watch');
    }).catch(err =>{
      console.log(err);
    })
  }

  getMovies(category?){
    this.moviesService.getMovies(category).then(data =>{
      this.movies = data;
      // console.log(data);
    }).catch(err =>{
      console.log(err);
      if(err.status == "401") {console.log("redirect register")
      localStorage.removeItem('token');
      this.router.navigate(['/'])};
    })
  }

  getCategory(){
    this.getMovies(this.category);
  }

  searchMovie(){
    this.moviesService.searchMovie(this.search).then(data=>{
      this.movies = data;
      console.log(this.movies);
    }).catch(err => {
      console.log(err);
    })
  }

  profileMovie(movieId){
    this.moviesService.setClick(movieId);
    // console.log(item);
    // this.router.navigate(['/movie/' + movieId ])
  }
}
