package put.enterprise.moviestore.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import put.enterprise.moviestore.dto.MovieDTO;
import put.enterprise.moviestore.model.Category;
import put.enterprise.moviestore.service.MovieService;

import java.util.List;

@RestController
@RequestMapping("movies")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<MovieDTO> getMovies(@RequestParam(required = false) Category category) {
        if (category != null) {
            return movieService.findMoviesByCategory(category);
        }
        return movieService.findAllMovies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovieDTO> getMovieById(@PathVariable Long id) {
        return movieService.findMovieById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
