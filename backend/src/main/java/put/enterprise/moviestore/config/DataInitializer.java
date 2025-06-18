package put.enterprise.moviestore.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import put.enterprise.moviestore.model.Category;
import put.enterprise.moviestore.model.Movie;
import put.enterprise.moviestore.repository.MovieRepository;

import java.math.BigDecimal;
import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    private final MovieRepository movieRepository;

    public DataInitializer(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public void run(String... args) {
        movieRepository.saveAll(Arrays.asList(
                Movie.builder()
                        .title("Skazani na Shawshank")
                        .category(Category.DRAMA)
                        .productionYear(1994)
                        .description("Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany bankier...")
                        .price(new BigDecimal("29.99"))
                        .posterFilename("skazani-na-shawshank.jpg")
                        .build(),
                Movie.builder()
                        .title("Forrest Gump")
                        .category(Category.COMEDY)
                        .productionYear(1994)
                        .description("Historia życia Forresta, człowieka o niskim IQ, ale wielkim sercu.")
                        .price(new BigDecimal("24.99"))
                        .posterFilename("forrest-gump.jpg")
                        .build(),
                Movie.builder()
                        .title("Król Lew")
                        .category(Category.FAMILY)
                        .productionYear(1994)
                        .description("Opowieść o młodym lwie Simbie, który musi odnaleźć swoje miejsce w kręgu życia.")
                        .price(new BigDecimal("34.99"))
                        .posterFilename("krol-lew.jpg")
                        .build(),
                Movie.builder()
                        .title("Pulp Fiction")
                        .category(Category.ACTION)
                        .productionYear(1994)
                        .description("Kultowy film Quentina Tarantino, którego akcja składa się z kilku powiązanych ze sobą nowel.")
                        .price(new BigDecimal("29.99"))
                        .posterFilename("pulp-fiction.jpg")
                        .build(),
                Movie.builder()
                        .title("Lśnienie")
                        .category(Category.HORROR)
                        .productionYear(1980)
                        .description("Jack Torrance otrzymuje posadę zimowego stróża w odciętym od świata hotelu.")
                        .price(new BigDecimal("19.99"))
                        .posterFilename("lsnienie.jpg")
                        .build(),
                Movie.builder()
                        .title("Gwiezdne wojny: Nowa nadzieja")
                        .category(Category.SCI_FI)
                        .productionYear(1977)
                        .description("Luke Skywalker dołącza do Rebelii, by walczyć przeciwko złowrogiemu Imperium.")
                        .price(new BigDecimal("39.99"))
                        .posterFilename("nowa-nadzieja.jpg")
                        .build()
        ));
    }
}