package put.enterprise.moviestore.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import put.enterprise.moviestore.dto.MovieDTO;
import put.enterprise.moviestore.model.Category;
import put.enterprise.moviestore.model.Movie;
import put.enterprise.moviestore.repository.MovieRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MovieService {

    private final MovieRepository movieRepository;
    private final ModelMapper modelMapper;

    public MovieService(MovieRepository movieRepository, ModelMapper modelMapper) {
        this.movieRepository = movieRepository;
        this.modelMapper = modelMapper;
    }

    public List<MovieDTO> findAllMovies() {
        return movieRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<MovieDTO> findMoviesByCategory(Category category) {
        return movieRepository.findByCategory(category)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<MovieDTO> findMovieById(Long id) {
        return movieRepository.findById(id).map(this::convertToDTO);
    }

    private MovieDTO convertToDTO(Movie movie) {
        return modelMapper.map(movie, MovieDTO.class);
    }
}
