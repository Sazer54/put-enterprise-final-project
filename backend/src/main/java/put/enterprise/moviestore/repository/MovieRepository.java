package put.enterprise.moviestore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import put.enterprise.moviestore.model.Category;
import put.enterprise.moviestore.model.Movie;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findByCategory(Category category);
}
