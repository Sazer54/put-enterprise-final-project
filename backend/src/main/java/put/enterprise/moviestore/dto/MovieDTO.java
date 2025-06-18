package put.enterprise.moviestore.dto;

import lombok.Data;
import put.enterprise.moviestore.model.Category;

import java.math.BigDecimal;

@Data
public class MovieDTO {
    private Long id;
    private String title;
    private Category category;
    private int productionYear;
    private String description;
    private BigDecimal price;
    private String posterFilename;
}
