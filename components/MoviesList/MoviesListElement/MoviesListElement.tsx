import { ListItemButton, ListItemText, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

import {
  StyledListItem,
  StyledImg,
  MovieInfo,
  ImageWrapper,
  RateIconWrapper,
} from "./MoviesListElement.styled";
import { MoviesListElementProps } from "./MoviesListElement.types";

import MovieInfoMenu from "./MovieInfoMenu/MovieInfoMenu";

const MoviesListElement: React.FC<MoviesListElementProps> = ({
  imgUrl,
  title,
  categories,
  productionYear,
  description,
  numberOfRatings,
  sumOfRatings,
}) => {
  const rating: number = sumOfRatings / numberOfRatings;

  return (
    <StyledListItem>
      <ListItemButton>
        <ImageWrapper>
          <StyledImg src={imgUrl} />
          <RateIconWrapper className="rate-icon-wrapper">
            <StarRateIcon></StarRateIcon>
            <Typography component="div" variant="body2">
              {rating.toFixed(2)}
            </Typography>
          </RateIconWrapper>
        </ImageWrapper>
        <ListItemText
          primary={title}
          secondary={
            <Typography component="div" variant="body2">
              <MovieInfo>
                <Typography component="span" variant="body2">
                  {productionYear} {"|"}
                </Typography>
                {categories.map((category) => (
                  <Typography component="p" variant="caption" key={category}>
                    {category.toUpperCase()}
                  </Typography>
                ))}
              </MovieInfo>
              <MovieInfoMenu
                categories={categories}
                productionYear={productionYear}
              />
              <Typography
                className="movie-description"
                component="div"
                variant="body2"
              >
                {description}
              </Typography>
            </Typography>
          }
        />
      </ListItemButton>
    </StyledListItem>
  );
};

export default MoviesListElement;
